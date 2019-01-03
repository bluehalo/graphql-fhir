const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the communicationrequest query
 */
module.exports = {
	requester: {
		type: GraphQLString,
		description:
			'Individual making the request (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester).',
	},
	authored: {
		type: DateScalar,
		description:
			'When request transitioned to being actionable (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-authored).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Unique identifier (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-identifier).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Focus of message (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject).',
	},
	replaces: {
		type: GraphQLString,
		description:
			'Request(s) replaced by this request (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-replaces).',
	},
	medium: {
		type: TokenScalar,
		description:
			'A channel of communication (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-medium).',
	},
	occurrence: {
		type: DateScalar,
		description:
			'When scheduled (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-occurrence).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Encounter leading to message (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter).',
	},
	priority: {
		type: TokenScalar,
		description:
			'Message urgency (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-priority).',
	},
	group_identifier: {
		type: TokenScalar,
		description:
			'Composite request this is part of (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-group-identifier).',
	},
	based_on: {
		type: GraphQLString,
		description:
			'Fulfills plan or proposal (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-based-on).',
	},
	sender: {
		type: GraphQLString,
		description:
			'Message sender (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-sender).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Focus of message (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-patient).',
	},
	recipient: {
		type: GraphQLString,
		description:
			'Message recipient (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-recipient).',
	},
	context: {
		type: GraphQLString,
		description:
			'Encounter or episode leading to message (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-context).',
	},
	category: {
		type: TokenScalar,
		description:
			'Message category (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-category).',
	},
	status: {
		type: TokenScalar,
		description:
			'draft | active | suspended | cancelled | completed | entered-in-error | unknown (See http://hl7.org/fhir/SearchParameter/CommunicationRequest-status).',
	},
};
