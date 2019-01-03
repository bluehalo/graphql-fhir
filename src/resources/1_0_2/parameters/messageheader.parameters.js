const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the messageheader query
 */
module.exports = {
	destination_uri: {
		type: UriScalar,
		description:
			'Actual destination address or id (See http://hl7.org/fhir/SearchParameter/messageheader-destination-uri).',
	},
	receiver: {
		type: GraphQLString,
		description:
			"Intended 'real-world' recipient for the data (See http://hl7.org/fhir/SearchParameter/messageheader-receiver).",
	},
	responsible: {
		type: GraphQLString,
		description:
			'Final responsibility for event (See http://hl7.org/fhir/SearchParameter/messageheader-responsible).',
	},
	data: {
		type: GraphQLString,
		description:
			'The actual content of the message (See http://hl7.org/fhir/SearchParameter/messageheader-data).',
	},
	code: {
		type: TokenScalar,
		description:
			'ok | transient-error | fatal-error (See http://hl7.org/fhir/SearchParameter/messageheader-code).',
	},
	response_id: {
		type: TokenScalar,
		description:
			'Id of original message (See http://hl7.org/fhir/SearchParameter/messageheader-response-id).',
	},
	destination: {
		type: GraphQLString,
		description:
			'Name of system (See http://hl7.org/fhir/SearchParameter/messageheader-destination).',
	},
	timestamp: {
		type: DateScalar,
		description:
			'Time that the message was sent (See http://hl7.org/fhir/SearchParameter/messageheader-timestamp).',
	},
	author: {
		type: GraphQLString,
		description:
			'The source of the decision (See http://hl7.org/fhir/SearchParameter/messageheader-author).',
	},
	source_uri: {
		type: UriScalar,
		description:
			'Actual message source address or id (See http://hl7.org/fhir/SearchParameter/messageheader-source-uri).',
	},
	source: {
		type: GraphQLString,
		description:
			'Name of system (See http://hl7.org/fhir/SearchParameter/messageheader-source).',
	},
	enterer: {
		type: GraphQLString,
		description:
			'The source of the data entry (See http://hl7.org/fhir/SearchParameter/messageheader-enterer).',
	},
	event: {
		type: TokenScalar,
		description:
			'Code for the event this message represents (See http://hl7.org/fhir/SearchParameter/messageheader-event).',
	},
	target: {
		type: GraphQLString,
		description:
			'Particular delivery destination within the destination (See http://hl7.org/fhir/SearchParameter/messageheader-target).',
	},
};
