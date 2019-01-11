const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/medications-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationRequest.medicationCodeableConcept',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationRequest.identifier',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions with this external identifier  * [MedicationAdministration](medicationadministration.html): Return administrations with this external identifier  * [MedicationStatement](medicationstatement.html): Return statements with this external identifier  * [MedicationDispense](medicationdispense.html): Return dispenses with this external identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationRequest.medicationReference',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication reference  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication resource  * [MedicationStatement](medicationstatement.html): Return statements of this medication reference  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine resource  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationRequest.subject',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns prescriptions for a specific patient  * [MedicationAdministration](medicationadministration.html): The identity of a patient to list administrations  for  * [MedicationStatement](medicationstatement.html): Returns statements for a specific patient.  * [MedicationDispense](medicationdispense.html): The identity of a patient to list dispenses  for  ',
	},
	// http://hl7.org/fhir/SearchParameter/medications-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationRequest.status',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Status of the prescription  * [MedicationAdministration](medicationadministration.html): MedicationAdministration event status (for example one of active/paused/completed/nullified)  * [MedicationStatement](medicationstatement.html): Return statements that match the given status  * [MedicationDispense](medicationdispense.html): Return dispenses with a specified dispense status  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon
	authoredon: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationRequest.authoredOn',
		description: 'Return prescriptions written on this date',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationRequest.category',
		description: 'Returns prescriptions with different categories',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationRequest.context',
		description:
			'Return prescriptions with this encounter or episode of care identifier',
	},
	// http://hl7.org/fhir/SearchParameter/medications-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationRequest.dosageInstruction.timing.event',
		description:
			'Multiple Resources:     * [MedicationRequest](medicationrequest.html): Returns medication request to be administered on a specific date  ',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-dispenser
	intended_dispenser: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationRequest.dispenseRequest.performer',
		description:
			'Returns prescriptions intended to be dispensed by this Organization',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-intent
	intent: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationRequest.intent',
		description: 'Returns prescriptions with different intents',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationRequest.priority',
		description: 'Returns prescriptions with different priorities',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationRequest.requester.agent',
		description: 'Returns prescriptions prescribed by this prescriber',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationRequest.subject',
		description: 'The identity of a patient to list orders  for',
	},
};
