const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticorder query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-actor
	actor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.event.actor',
		description: 'Who recorded or did this',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-bodysite
	bodysite: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.bodySite',
		description: 'Location of requested test (if applicable)',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.code',
		description: 'Code to indicate the item (test or panel) being ordered',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.encounter',
		description: 'The encounter that this diagnostic order is associated with',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-date
	event_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DiagnosticOrder.event.dateTime',
		description: 'The date at which the event happened',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-status
	event_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.event.status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-event-status-date
	event_status_date: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A combination of past-status and date',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.identifier',
		description: 'Identifiers assigned to this order',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-date
	item_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DiagnosticOrder.item.event.dateTime',
		description: 'The date at which the event happened',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-past-status
	item_past_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.event.status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-status
	item_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.item.status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-item-status-date
	item_status_date: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A combination of item-past-status and item-date',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-orderer
	orderer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.orderer',
		description: 'Who ordered the test',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.subject',
		description: 'Who and/or what test is about',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-specimen
	specimen: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.specimen',
		description: 'If the whole order relates to specific specimens',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticOrder.status',
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticOrder-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticOrder.subject',
		description: 'Who and/or what test is about',
	},
};
