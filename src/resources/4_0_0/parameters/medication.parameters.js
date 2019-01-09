const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.code',
		description:
			'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-expiration-date
	expiration_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Medication.batch.expirationDate',
		description: 'Returns medications in a batch with this expiration date',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-form
	form: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.form',
		description: 'Returns medications for a specific dose form',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.identifier',
		description: 'Returns medications with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-ingredient
	ingredient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.ingredient.itemReference',
		description: 'Returns medications for this ingredient reference',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-ingredient-code
	ingredient_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.ingredient.itemCodeableConcept',
		description: 'Returns medications for this ingredient code',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-lot-number
	lot_number: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.batch.lotNumber',
		description: 'Returns medications in a batch with this lot number',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-manufacturer
	manufacturer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.manufacturer',
		description: 'Returns medications made or sold for this manufacturer',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.status',
		description: 'Returns medications for this status',
	},
};
