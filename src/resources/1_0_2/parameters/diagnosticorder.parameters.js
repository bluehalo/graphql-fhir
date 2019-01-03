const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticorder query
 */
module.exports = {
	orderer: {
		type: GraphQLString,
		description:
			'Who ordered the test (See http://hl7.org/fhir/SearchParameter/diagnosticorder-orderer).',
	},
	status: {
		type: TokenScalar,
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed (See http://hl7.org/fhir/SearchParameter/diagnosticorder-status).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who and/or what test is about (See http://hl7.org/fhir/SearchParameter/diagnosticorder-subject).',
	},
	item_status: {
		type: TokenScalar,
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed (See http://hl7.org/fhir/SearchParameter/diagnosticorder-item-status).',
	},
	event_status: {
		type: TokenScalar,
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed (See http://hl7.org/fhir/SearchParameter/diagnosticorder-event-status).',
	},
	actor: {
		type: GraphQLString,
		description:
			'Who recorded or did this (See http://hl7.org/fhir/SearchParameter/diagnosticorder-actor).',
	},
	code: {
		type: TokenScalar,
		description:
			'Code to indicate the item (test or panel) being ordered (See http://hl7.org/fhir/SearchParameter/diagnosticorder-code).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'The encounter that this diagnostic order is associated with (See http://hl7.org/fhir/SearchParameter/diagnosticorder-encounter).',
	},
	item_past_status: {
		type: TokenScalar,
		description:
			'proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed (See http://hl7.org/fhir/SearchParameter/diagnosticorder-item-past-status).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who and/or what test is about (See http://hl7.org/fhir/SearchParameter/diagnosticorder-patient).',
	},
	bodysite: {
		type: TokenScalar,
		description:
			'Location of requested test (if applicable) (See http://hl7.org/fhir/SearchParameter/diagnosticorder-bodysite).',
	},
	item_date: {
		type: DateScalar,
		description:
			'The date at which the event happened (See http://hl7.org/fhir/SearchParameter/diagnosticorder-item-date).',
	},
	specimen: {
		type: GraphQLString,
		description:
			'If the whole order relates to specific specimens (See http://hl7.org/fhir/SearchParameter/diagnosticorder-specimen).',
	},
	event_status_date: {
		type: GraphQLString,
		description:
			'A combination of past-status and date (See http://hl7.org/fhir/SearchParameter/diagnosticorder-event-status-date).',
	},
	event_date: {
		type: DateScalar,
		description:
			'The date at which the event happened (See http://hl7.org/fhir/SearchParameter/diagnosticorder-event-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Identifiers assigned to this order (See http://hl7.org/fhir/SearchParameter/diagnosticorder-identifier).',
	},
	item_status_date: {
		type: GraphQLString,
		description:
			'A combination of item-past-status and item-date (See http://hl7.org/fhir/SearchParameter/diagnosticorder-item-status-date).',
	},
};
