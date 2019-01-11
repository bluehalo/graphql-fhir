const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the messageheader query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MessageHeader-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.author',
		description: 'The source of the decision',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageHeader.response.code',
		description: 'ok | transient-error | fatal-error',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-destination
	destination: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MessageHeader.destination.name',
		description: 'Name of system',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-destination-uri
	destination_uri: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'MessageHeader.destination.endpoint',
		description: 'Actual destination address or id',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-enterer
	enterer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.enterer',
		description: 'The source of the data entry',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageHeader.eventCoding',
		description:
			'Code for the event this message represents or link to event definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-focus
	focus: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.focus',
		description: 'The actual content of the message',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-receiver
	receiver: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.destination.receiver',
		description: "Intended 'real-world' recipient for the data",
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-response-id
	response_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageHeader.response.identifier',
		description: 'Id of original message',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-responsible
	responsible: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.responsible',
		description: 'Final responsibility for event',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-sender
	sender: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.sender',
		description: 'Real world sender of the message',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-source
	source: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MessageHeader.source.name',
		description: 'Name of system',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-source-uri
	source_uri: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'MessageHeader.source.endpoint',
		description: 'Actual message source address or id',
	},
	// http://hl7.org/fhir/SearchParameter/MessageHeader-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MessageHeader.destination.target',
		description: 'Particular delivery destination within the destination',
	},
};
