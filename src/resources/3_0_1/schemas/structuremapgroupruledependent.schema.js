const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureMap.group.rule.dependent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapGroupRuleDependent',
	description: 'Which other rules to apply in the context of this rule.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name of a rule or group to apply.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Name of a rule or group to apply.'
		},
		variable: {
			type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
			description: 'Variable to pass to the rule or group.'
		},
		_variable: {
			type: require('./element.schema'),
			description: 'Variable to pass to the rule or group.'
		}
	})
});
