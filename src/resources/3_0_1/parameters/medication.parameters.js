const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/medications-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.code',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-container
	container: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.package.container',
		description: 'E.g. box, vial, blister-pack',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-form
	form: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.form',
		description: 'powder | tablets | capsule +',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-ingredient
	ingredient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.ingredient.itemReference',
		description: 'The product contained',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-ingredient-code
	ingredient_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.ingredient.itemCodeableConcept',
		description: 'The product contained',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-manufacturer
	manufacturer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.manufacturer',
		description: 'Manufacturer of the item',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-over-the-counter
	over_the_counter: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.isOverTheCounter',
		description: 'True if medication does not require a prescription',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-package-item
	package_item: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.package.content.itemReference',
		description: 'The item in the package',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-package-item-code
	package_item_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.package.content.itemCodeableConcept',
		description: 'The item in the package',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.status',
		description: 'active | inactive | entered-in-error',
	},
};
