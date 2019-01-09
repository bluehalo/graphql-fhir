const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationadministration query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/medications-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.medicationCodeableConcept',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.context',
		description:
			'Return administrations that share this encounter or episode of care',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.device',
		description:
			'Return administrations with this administration device identity',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-effective-time
	effective_time: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationAdministration.effectiveDateTime',
		description: 'Date administration happened (or did not happen)',
	},
	// http://hl7.org/fhir/SearchParameter/medications-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.medicationReference',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-not-given
	not_given: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.notGiven',
		description: 'Administrations that were not made',
	},
	// http://hl7.org/fhir/SearchParameter/medications-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.subject',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.performer.actor',
		description:
			'The identify of the individual who administered the medication',
	},
	// http://hl7.org/fhir/SearchParameter/medications-prescription
	prescription: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.prescription',
		description:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): The identity of a prescription to list administrations from  * [MedicationDispense](medicationdispense.html): The identity of a prescription to list dispenses from  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-given
	reason_given: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.reasonCode',
		description: 'Reasons for administering the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-reason-not-given
	reason_not_given: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.reasonNotGiven',
		description: 'Reasons for not administering the medication',
	},
	// http://hl7.org/fhir/SearchParameter/medications-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationAdministration.status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationAdministration-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationAdministration.subject',
		description:
			'The identify of the individual or group to list administrations for',
	},
};
