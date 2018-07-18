const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MessageHeaderResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MessageHeaderResponse_Input',
	description: 'Information about the message that this message is a response to.  Only present if this message is a response.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The id of the message that this message is a response to.'
		},
		_identifier: {
			type: require('./element.input'),
			description: 'The id of the message that this message is a response to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/response-code
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.'
		},
		details: {
			type: require('./reference.input'),
			description: 'Full details of any issues found in the message.'
		}
	})
});
