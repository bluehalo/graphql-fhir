const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the communicationrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CommunicationRequest.category',
		description: 'Message category',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.encounter',
		description: 'Encounter leading to message',
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
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-requested
	requested: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CommunicationRequest.requestedOn',
		description: 'When ordered or proposed',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.requester',
		description: 'An individual who requested a communication',
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
			'proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CommunicationRequest.subject',
		description: 'Focus of message',
	},
	// http://hl7.org/fhir/SearchParameter/CommunicationRequest-time
	time: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CommunicationRequest.scheduledDateTime',
		description: 'When scheduled',
	},
};
