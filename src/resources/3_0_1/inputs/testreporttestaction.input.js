const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestReport.test.action Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportTestAction_Input',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
