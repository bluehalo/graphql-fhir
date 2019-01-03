const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestReport.setup.action.operation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportSetupActionOperation',
	description: 'The operation performed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/report-action-result-codes
		result: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The result of this operation.'
		},
		_result: {
			type: require('./element.schema'),
			description: 'The result of this operation.'
		},
		message: {
			type: GraphQLString,
			description: 'An explanatory message associated with the result.'
		},
		_message: {
			type: require('./element.schema'),
			description: 'An explanatory message associated with the result.'
		},
		detail: {
			type: UriScalar,
			description: 'A link to further details on the result.'
		},
		_detail: {
			type: require('./element.schema'),
			description: 'A link to further details on the result.'
		}
	})
});
