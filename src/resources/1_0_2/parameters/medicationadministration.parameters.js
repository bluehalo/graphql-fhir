const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationadministration query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.medicationCodeableConcept',
		description: 'Return administrations of this medication code',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.device',
		description:
			'Return administrations with this administration device identity',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-effectivetime
	effectivetime: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationAdministration.effectiveTimeDateTime',
		description: 'Date administration happened (or did not happen)',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.encounter',
		description: 'Return administrations that share this encounter',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.identifier',
		description: 'Return administrations with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.medicationReference',
		description: 'Return administrations of this medication resource',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-notgiven
	notgiven: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.wasNotGiven',
		description: 'Administrations that were not made',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.patient',
		description: 'The identity of a patient to list administrations  for',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.practitioner',
		description: 'Who administered substance',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-prescription
	prescription: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.prescription',
		description: 'The identity of a prescription to list administrations from',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.status',
		description:
			'MedicationAdministration event status (for example one of active/paused/completed/nullified)',
	},
};
