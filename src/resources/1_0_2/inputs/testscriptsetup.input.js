const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.setup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetup_Input',
	description:
		'A series of required setup operations before tests are executed.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			action: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./testscriptsetupaction.input')),
				),
				description:
					'Action would contain either an operation or an assertion.',
			},
		}),
});
