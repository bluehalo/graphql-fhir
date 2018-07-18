const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the encounter query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'A date within the period the Encounter lasted. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifier(s) by which this encounter is known. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	reason: {
		type: TokenScalar,
		description: 'Reason the encounter takes place (code). See http://hl7.org/fhir/SearchParameter/Encounter-reason.'
	},
	episodeofcare: {
		type: GraphQLString,
		description: 'Episode(s) of care that this encounter should be recorded against. See http://hl7.org/fhir/SearchParameter/Encounter-episodeofcare.'
	},
	participant_type: {
		type: TokenScalar,
		description: 'Role of participant in encounter. See http://hl7.org/fhir/SearchParameter/Encounter-participant-type.'
	},
	incomingreferral: {
		type: GraphQLString,
		description: 'The ReferralRequest that initiated this encounter. See http://hl7.org/fhir/SearchParameter/Encounter-incomingreferral.'
	},
	practitioner: {
		type: GraphQLString,
		description: 'Persons involved in the encounter other than the patient. See http://hl7.org/fhir/SearchParameter/Encounter-practitioner.'
	},
	subject: {
		type: GraphQLString,
		description: 'The patient ro group present at the encounter. See http://hl7.org/fhir/SearchParameter/Encounter-subject.'
	},
	length: {
		type: GraphQLString,
		description: 'Length of encounter in days. See http://hl7.org/fhir/SearchParameter/Encounter-length.'
	},
	diagnosis: {
		type: GraphQLString,
		description: 'Reason the encounter takes place (resource). See http://hl7.org/fhir/SearchParameter/Encounter-diagnosis.'
	},
	appointment: {
		type: GraphQLString,
		description: 'The appointment that scheduled this encounter. See http://hl7.org/fhir/SearchParameter/Encounter-appointment.'
	},
	part_of: {
		type: GraphQLString,
		description: 'Another Encounter this encounter is part of. See http://hl7.org/fhir/SearchParameter/Encounter-part-of.'
	},
	type: {
		type: TokenScalar,
		description: 'Specific type of encounter. See http://hl7.org/fhir/SearchParameter/clinical-type.'
	},
	participant: {
		type: GraphQLString,
		description: 'Persons involved in the encounter other than the patient. See http://hl7.org/fhir/SearchParameter/Encounter-participant.'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient ro group present at the encounter. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	location_period: {
		type: DateScalar,
		description: 'Time period during which the patient was present at the location. See http://hl7.org/fhir/SearchParameter/Encounter-location-period.'
	},
	location: {
		type: GraphQLString,
		description: 'Location the encounter takes place. See http://hl7.org/fhir/SearchParameter/Encounter-location.'
	},
	service_provider: {
		type: GraphQLString,
		description: 'The custodian organization of this Encounter record. See http://hl7.org/fhir/SearchParameter/Encounter-service-provider.'
	},
	special_arrangement: {
		type: TokenScalar,
		description: 'Wheelchair, translator, stretcher, etc. See http://hl7.org/fhir/SearchParameter/Encounter-special-arrangement.'
	},
	class: {
		type: TokenScalar,
		description: 'inpatient | outpatient | ambulatory | emergency +. See http://hl7.org/fhir/SearchParameter/Encounter-class.'
	},
	status: {
		type: TokenScalar,
		description: 'planned | arrived | triaged | in-progress | onleave | finished | cancelled +. See http://hl7.org/fhir/SearchParameter/Encounter-status.'
	}
};
