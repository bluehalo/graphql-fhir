const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Conformance.messaging.endpoint Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceMessagingEndpoint',
	description: 'An endpoint (network accessible address) to which messages and/or replies are to be sent.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/message-transport
		protocol: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'A list of the messaging transport protocol(s) identifiers, supported by this endpoint.'
		},
		address: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.'
		},
		_address: {
			type: require('./element.schema'),
			description: 'The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.'
		}
	})
});
