const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationadministration query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Return administrations with this external identifier (See http://hl7.org/fhir/SearchParameter/medications-identifier).'
	},
	code: {
		type: TokenScalar,
		description: 'Return administrations of this medication code (See http://hl7.org/fhir/SearchParameter/medications-code).'
	},
	performer: {
		type: GraphQLString,
		description: 'The identify of the individual who administered the medication (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-performer).'
	},
	subject: {
		type: GraphQLString,
		description: 'The identify of the individual or group to list administrations for (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-subject).'
	},
	not_given: {
		type: TokenScalar,
		description: 'Administrations that were not made (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-not-given).'
	},
	medication: {
		type: GraphQLString,
		description: 'Return administrations of this medication resource (See http://hl7.org/fhir/SearchParameter/medications-medication).'
	},
	reason_given: {
		type: TokenScalar,
		description: 'Reasons for administering the medication (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-given).'
	},
	prescription: {
		type: GraphQLString,
		description: 'The identity of a prescription to list administrations from (See http://hl7.org/fhir/SearchParameter/medications-prescription).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list administrations  for (See http://hl7.org/fhir/SearchParameter/medications-patient).'
	},
	effective_time: {
		type: DateScalar,
		description: 'Date administration happened (or did not happen) (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-effective-time).'
	},
	context: {
		type: GraphQLString,
		description: 'Return administrations that share this encounter or episode of care (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-context).'
	},
	reason_not_given: {
		type: TokenScalar,
		description: 'Reasons for not administering the medication (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-not-given).'
	},
	device: {
		type: GraphQLString,
		description: 'Return administrations with this administration device identity (See http://hl7.org/fhir/SearchParameter/MedicationAdministration-device).'
	},
	status: {
		type: TokenScalar,
		description: 'MedicationAdministration event status (for example one of active/paused/completed/nullified) (See http://hl7.org/fhir/SearchParameter/medications-status).'
	}
};
