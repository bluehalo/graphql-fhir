const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConformanceMessagingEndpoint Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceMessagingEndpoint_Input',
	description: 'An endpoint (network accessible address) to which messages and/or replies are to be sent.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/message-transport
		protocol: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'A list of the messaging transport protocol(s) identifiers, supported by this endpoint.'
		},
		address: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.'
		},
		_address: {
			type: require('./element.input'),
			description: 'The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.'
		}
	})
});
