const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.setup.action.assert.rule.param Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupActionAssertRuleParam_Input',
	description: 'Each rule template can take one or more parameters for rule evaluation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Descriptive name for this parameter that matches the external assert rule parameter name.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Descriptive name for this parameter that matches the external assert rule parameter name.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value for the parameter that will be passed on to the external rule template.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The value for the parameter that will be passed on to the external rule template.'
		}
	})
});
