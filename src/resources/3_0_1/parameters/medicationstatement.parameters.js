const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationstatement query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/medications-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.medicationCodeableConcept',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.medicationReference',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.subject',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.category',
		description: 'Returns statements of this category of medicationstatement',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.context',
		description:
			'Returns statements for a specific context (episode or episode of Care).',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationStatement.effectiveDateTime',
		description: 'Date when patient was taking (or not taking) the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-part-of
	part_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.partOf',
		description: 'Returns statements that are part of another event.',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.informationSource',
		description: 'Who or where the information in the statement came from',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.subject',
		description:
			'The identity of a patient, animal or group to list statements for',
	},
};
