const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary StructureMap.group.rule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapGroupRule',
	description: 'Transform Rule from source to target.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name of the rule for internal references.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Name of the rule for internal references.'
		},
		source: {
			type: new GraphQLList(new GraphQLNonNull(require('./structuremapgrouprulesource.schema'))),
			description: 'Source inputs to the mapping.'
		},
		target: {
			type: new GraphQLList(require('./structuremapgroupruletarget.schema')),
			description: 'Content to create because of this mapping rule.'
		},
		dependent: {
			type: new GraphQLList(require('./structuremapgroupruledependent.schema')),
			description: 'Which other rules to apply in the context of this rule.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation for this instance of data.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'Documentation for this instance of data.'
		}
	})
});
