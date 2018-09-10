const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the encounter query
 */
module.exports = {
	participant_type: {
		type: TokenScalar,
		description: 'Role of participant in encounter (See http://hl7.org/fhir/SearchParameter/encounter-participant-type).'
	},
	episodeofcare: {
		type: GraphQLString,
		description: 'Episode(s) of care that this encounter should be recorded against (See http://hl7.org/fhir/SearchParameter/encounter-episodeofcare).'
	},
	status: {
		type: TokenScalar,
		description: 'planned | arrived | in-progress | onleave | finished | cancelled (See http://hl7.org/fhir/SearchParameter/encounter-status).'
	},
	reason: {
		type: TokenScalar,
		description: 'Reason the encounter takes place (code) (See http://hl7.org/fhir/SearchParameter/encounter-reason).'
	},
	condition: {
		type: GraphQLString,
		description: 'Reason the encounter takes place (resource) (See http://hl7.org/fhir/SearchParameter/encounter-condition).'
	},
	location: {
		type: GraphQLString,
		description: 'Location the encounter takes place (See http://hl7.org/fhir/SearchParameter/encounter-location).'
	},
	indication: {
		type: GraphQLString,
		description: 'Reason the encounter takes place (resource) (See http://hl7.org/fhir/SearchParameter/encounter-indication).'
	},
	type: {
		type: TokenScalar,
		description: 'Specific type of encounter (See http://hl7.org/fhir/SearchParameter/encounter-type).'
	},
	date: {
		type: DateScalar,
		description: 'A date within the period the Encounter lasted (See http://hl7.org/fhir/SearchParameter/encounter-date).'
	},
	special_arrangement: {
		type: TokenScalar,
		description: 'Wheelchair, translator, stretcher, etc. (See http://hl7.org/fhir/SearchParameter/encounter-special-arrangement).'
	},
	part_of: {
		type: GraphQLString,
		description: 'Another Encounter this encounter is part of (See http://hl7.org/fhir/SearchParameter/encounter-part-of).'
	},
	appointment: {
		type: GraphQLString,
		description: 'The appointment that scheduled this encounter (See http://hl7.org/fhir/SearchParameter/encounter-appointment).'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient present at the encounter (See http://hl7.org/fhir/SearchParameter/encounter-patient).'
	},
	practitioner: {
		type: GraphQLString,
		description: 'Persons involved in the encounter other than the patient (See http://hl7.org/fhir/SearchParameter/encounter-practitioner).'
	},
	length: {
		type: GraphQLString,
		description: 'Length of encounter in days (See http://hl7.org/fhir/SearchParameter/encounter-length).'
	},
	participant: {
		type: GraphQLString,
		description: 'Persons involved in the encounter other than the patient (See http://hl7.org/fhir/SearchParameter/encounter-participant).'
	},
	incomingreferral: {
		type: GraphQLString,
		description: 'The ReferralRequest that initiated this encounter (See http://hl7.org/fhir/SearchParameter/encounter-incomingreferral).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifier(s) by which this encounter is known (See http://hl7.org/fhir/SearchParameter/encounter-identifier).'
	},
	procedure: {
		type: GraphQLString,
		description: 'Reason the encounter takes place (resource) (See http://hl7.org/fhir/SearchParameter/encounter-procedure).'
	},
	location_period: {
		type: DateScalar,
		description: 'Time period during which the patient was present at the location (See http://hl7.org/fhir/SearchParameter/encounter-location-period).'
	}
};
