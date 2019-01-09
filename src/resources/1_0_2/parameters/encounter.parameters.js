const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the encounter query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Encounter-appointment
	appointment: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.appointment',
		description: 'The appointment that scheduled this encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-condition
	condition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.indication',
		description: 'Reason the encounter takes place (resource)',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Encounter.period',
		description: 'A date within the period the Encounter lasted',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-episodeofcare
	episodeofcare: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.episodeOfCare',
		description:
			'Episode(s) of care that this encounter should be recorded against',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.identifier',
		description: 'Identifier(s) by which this encounter is known',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-incomingreferral
	incomingreferral: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.incomingReferral',
		description: 'The ReferralRequest that initiated this encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-indication
	indication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.indication',
		description: 'Reason the encounter takes place (resource)',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-length
	length: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'Encounter.length',
		description: 'Length of encounter in days',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.location.location',
		description: 'Location the encounter takes place',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-location-period
	location_period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Encounter.location.period',
		description:
			'Time period during which the patient was present at the location',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-part-of
	part_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.partOf',
		description: 'Another Encounter this encounter is part of',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-participant
	participant: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.participant.individual',
		description: 'Persons involved in the encounter other than the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-participant-type
	participant_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.participant.type',
		description: 'Role of participant in encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.patient',
		description: 'The patient present at the encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.participant.individual',
		description: 'Persons involved in the encounter other than the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-procedure
	procedure: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Encounter.indication',
		description: 'Reason the encounter takes place (resource)',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-reason
	reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.reason',
		description: 'Reason the encounter takes place (code)',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-special-arrangement
	special_arrangement: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.hospitalization.specialArrangement',
		description: 'Wheelchair, translator, stretcher, etc.',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.status',
		description:
			'planned | arrived | in-progress | onleave | finished | cancelled',
	},
	// http://hl7.org/fhir/SearchParameter/Encounter-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Encounter.type',
		description: 'Specific type of encounter',
	},
};
