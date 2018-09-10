const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the messageheader query
 */
module.exports = {
	code: {
		type: TokenScalar,
		description: 'ok | transient-error | fatal-error (See http://hl7.org/fhir/SearchParameter/MessageHeader-code).'
	},
	receiver: {
		type: GraphQLString,
		description: 'Intended \'real-world\' recipient for the data (See http://hl7.org/fhir/SearchParameter/MessageHeader-receiver).'
	},
	author: {
		type: GraphQLString,
		description: 'The source of the decision (See http://hl7.org/fhir/SearchParameter/MessageHeader-author).'
	},
	destination: {
		type: GraphQLString,
		description: 'Name of system (See http://hl7.org/fhir/SearchParameter/MessageHeader-destination).'
	},
	focus: {
		type: GraphQLString,
		description: 'The actual content of the message (See http://hl7.org/fhir/SearchParameter/MessageHeader-focus).'
	},
	source: {
		type: GraphQLString,
		description: 'Name of system (See http://hl7.org/fhir/SearchParameter/MessageHeader-source).'
	},
	target: {
		type: GraphQLString,
		description: 'Particular delivery destination within the destination (See http://hl7.org/fhir/SearchParameter/MessageHeader-target).'
	},
	destination_uri: {
		type: UriScalar,
		description: 'Actual destination address or id (See http://hl7.org/fhir/SearchParameter/MessageHeader-destination-uri).'
	},
	source_uri: {
		type: UriScalar,
		description: 'Actual message source address or id (See http://hl7.org/fhir/SearchParameter/MessageHeader-source-uri).'
	},
	sender: {
		type: GraphQLString,
		description: 'Real world sender of the message (See http://hl7.org/fhir/SearchParameter/MessageHeader-sender).'
	},
	responsible: {
		type: GraphQLString,
		description: 'Final responsibility for event (See http://hl7.org/fhir/SearchParameter/MessageHeader-responsible).'
	},
	enterer: {
		type: GraphQLString,
		description: 'The source of the data entry (See http://hl7.org/fhir/SearchParameter/MessageHeader-enterer).'
	},
	response_id: {
		type: TokenScalar,
		description: 'Id of original message (See http://hl7.org/fhir/SearchParameter/MessageHeader-response-id).'
	},
	event: {
		type: TokenScalar,
		description: 'Code for the event this message represents (See http://hl7.org/fhir/SearchParameter/MessageHeader-event).'
	},
	timestamp: {
		type: DateScalar,
		description: 'Time that the message was sent (See http://hl7.org/fhir/SearchParameter/MessageHeader-timestamp).'
	}
};
