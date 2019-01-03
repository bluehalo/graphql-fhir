const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.setup.action Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupAction_Input',
	description: 'Action would contain either an operation or an assertion.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			operation: {
				type: require('./testscriptsetupactionoperation.input'),
				description: 'The operation to perform.',
			},
			assert: {
				type: require('./testscriptsetupactionassert.input'),
				description:
					'Evaluates the results of previous operations to determine if the server under test behaves appropriately.',
			},
		}),
});
