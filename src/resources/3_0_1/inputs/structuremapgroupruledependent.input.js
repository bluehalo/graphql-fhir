const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureMap.group.rule.dependent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapGroupRuleDependent_Input',
	description: 'Which other rules to apply in the context of this rule.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name of a rule or group to apply.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Name of a rule or group to apply.'
		},
		variable: {
			type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
			description: 'Variable to pass to the rule or group.'
		},
		_variable: {
			type: require('./element.input'),
			description: 'Variable to pass to the rule or group.'
		}
	})
});
