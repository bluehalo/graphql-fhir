const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestReport.teardown Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportTeardown_Input',
	description:
		'The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			action: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./testreportteardownaction.input')),
				),
				description: 'The teardown action will only contain an operation.',
			},
		}),
});
