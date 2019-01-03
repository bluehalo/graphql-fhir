const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestReport.setup Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportSetup',
	description:
		'The results of the series of required setup operations before the tests were executed.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			action: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./testreportsetupaction.schema')),
				),
				description:
					'Action would contain either an operation or an assertion.',
			},
		}),
});
