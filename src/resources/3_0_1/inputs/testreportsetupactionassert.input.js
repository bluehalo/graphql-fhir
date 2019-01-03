const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestReport.setup.action.assert Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportSetupActionAssert_Input',
	description:
		'The results of the assertion performed on the previous operations.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/report-action-result-codes
			result: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'The result of this assertion.',
			},
			_result: {
				type: require('./element.input'),
				description: 'The result of this assertion.',
			},
			message: {
				type: GraphQLString,
				description: 'An explanatory message associated with the result.',
			},
			_message: {
				type: require('./element.input'),
				description: 'An explanatory message associated with the result.',
			},
			detail: {
				type: GraphQLString,
				description: 'A link to further details on the result.',
			},
			_detail: {
				type: require('./element.input'),
				description: 'A link to further details on the result.',
			},
		}),
});
