const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationdispense query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/medications-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.medicationCodeableConcept',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.medicationReference',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.subject',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-prescription
	prescription: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.authorizingPrescription',
		description:
			'Multiple Resources:     * [MedicationAdministration](medicationadministration.html): The identity of a prescription to list administrations from  * [MedicationDispense](medicationdispense.html): The identity of a prescription to list dispenses from  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.context',
		description:
			'Returns dispenses with a specific context (episode or episode of care)',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-destination
	destination: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.destination',
		description:
			'Return dispenses that should be sent to a specific destination',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.performer.actor',
		description: 'Return dispenses performed by a specific individual',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver
	receiver: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.receiver',
		description: 'The identity of a receiver to list dispenses for',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty
	responsibleparty: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.substitution.responsibleParty',
		description: 'Return dispenses with the specified responsible party',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.subject',
		description: 'The identity of a patient to list dispenses  for',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.type',
		description: 'Return dispenses of a specific type',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover
	whenhandedover: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenHandedOver',
		description: 'Returns dispenses handed over on this date',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared
	whenprepared: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenPrepared',
		description: 'Returns dispenses prepared on this date',
	},
};
