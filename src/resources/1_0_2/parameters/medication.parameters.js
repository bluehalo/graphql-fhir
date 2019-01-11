const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Medication-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.code',
		description: 'Codes that identify this medication',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-container
	container: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.package.container',
		description: 'E.g. box, vial, blister-pack',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-content
	content: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.package.content.item',
		description: 'A product in the package',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-form
	form: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Medication.product.form',
		description: 'powder | tablets | carton +',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-ingredient
	ingredient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.product.ingredient.item',
		description: 'The product contained',
	},
	// http://hl7.org/fhir/SearchParameter/Medication-manufacturer
	manufacturer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Medication.manufacturer',
		description: 'Manufacturer of the item',
	},
};
