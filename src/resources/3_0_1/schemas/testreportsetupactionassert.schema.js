const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestReport.setup.action.assert Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportSetupActionAssert',
	description: 'The results of the assertion performed on the previous operations.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/report-action-result-codes
		result: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The result of this assertion.'
		},
		_result: {
			type: require('./element.schema'),
			description: 'The result of this assertion.'
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
			type: GraphQLString,
			description: 'A link to further details on the result.'
		},
		_detail: {
			type: require('./element.schema'),
			description: 'A link to further details on the result.'
		}
	})
});
