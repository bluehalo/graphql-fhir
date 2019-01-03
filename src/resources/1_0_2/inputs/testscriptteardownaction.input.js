const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.teardown.action Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptTeardownAction_Input',
	description: 'The teardown action will only contain an operation.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
