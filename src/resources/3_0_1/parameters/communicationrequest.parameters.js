const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the communicationrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-authored
	authored: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CommunicationRequest.authoredOn',
		description: 'When request transitioned to being actionable',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.basedOn',
		description: 'Fulfills plan or proposal',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.category',
		description: 'Message category',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.context',
		description: 'Encounter or episode leading to message',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.context',
		description: 'Encounter leading to message',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-group-identifier
	group_identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.groupIdentifier',
		description: 'Composite request this is part of',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.identifier',
		description: 'Unique identifier',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-medium
	medium: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.medium',
		description: 'A channel of communication',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-occurrence
	occurrence: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CommunicationRequest.occurrenceDateTime',
		description: 'When scheduled',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.subject',
		description: 'Focus of message',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.priority',
		description: 'Message urgency',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-recipient
	recipient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.recipient',
		description: 'Message recipient',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-replaces
	replaces: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.replaces',
		description: 'Request(s) replaced by this request',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.requester.agent',
		description: 'Individual making the request',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-sender
	sender: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.sender',
		description: 'Message sender',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.status',
		description:
			'draft | active | suspended | cancelled | completed | entered-in-error | unknown',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.subject',
		description: 'Focus of message',
	},
};
