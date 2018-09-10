const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureMap.group.rule Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapGroupRule_Input',
	description: 'Transform Rule from source to target.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name of the rule for internal references.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Name of the rule for internal references.'
		},
		source: {
			type: new GraphQLList(new GraphQLNonNull(require('./structuremapgrouprulesource.input'))),
			description: 'Source inputs to the mapping.'
		},
		target: {
			type: new GraphQLList(require('./structuremapgroupruletarget.input')),
			description: 'Content to create because of this mapping rule.'
		},
		dependent: {
			type: new GraphQLList(require('./structuremapgroupruledependent.input')),
			description: 'Which other rules to apply in the context of this rule.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation for this instance of data.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Documentation for this instance of data.'
		}
	})
});
