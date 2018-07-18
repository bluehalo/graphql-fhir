const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestScriptSetupAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupAction_Input',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		operation: {
			type: require('./testscriptsetupactionoperation.input'),
			description: 'The operation to perform.'
		},
		assert: {
			type: require('./testscriptsetupactionassert.input'),
			description: 'Evaluates the results of previous operations to determine if the server under test behaves appropriately.'
		}
	})
});
