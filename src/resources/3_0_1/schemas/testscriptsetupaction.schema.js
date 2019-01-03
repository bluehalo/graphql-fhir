const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.setup.action Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupAction',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		operation: {
			type: require('./testscriptsetupactionoperation.schema'),
			description: 'The operation to perform.'
		},
		assert: {
			type: require('./testscriptsetupactionassert.schema'),
			description: 'Evaluates the results of previous operations to determine if the server under test behaves appropriately.'
		}
	})
});
