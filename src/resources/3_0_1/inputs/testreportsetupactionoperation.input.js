const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestReportSetupActionOperation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportSetupActionOperation_Input',
	description: 'The operation performed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/report-action-result-codes
		result: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The result of this operation.'
		},
		_result: {
			type: require('./element.input'),
			description: 'The result of this operation.'
		},
		message: {
			type: GraphQLString,
			description: 'An explanatory message associated with the result.'
		},
		_message: {
			type: require('./element.input'),
			description: 'An explanatory message associated with the result.'
		},
		detail: {
			type: UriScalar,
			description: 'A link to further details on the result.'
		},
		_detail: {
			type: require('./element.input'),
			description: 'A link to further details on the result.'
		}
	})
});
