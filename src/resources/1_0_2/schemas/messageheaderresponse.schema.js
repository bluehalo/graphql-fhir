const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MessageHeader.response Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeaderResponse',
	description: 'Information about the message that this message is a response to.  Only present if this message is a response.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The id of the message that this message is a response to.'
		},
		_identifier: {
			type: require('./element.schema'),
			description: 'The id of the message that this message is a response to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/response-code
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.'
		},
		details: {
			type: require('./reference.schema'),
			description: 'Full details of any issues found in the message.'
		}
	})
});
