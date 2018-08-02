const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	ingredient_code: {
		type: TokenScalar,
		description: 'The product contained. See http://hl7.org/fhir/SearchParameter/Medication-ingredient-code.'
	},
	container: {
		type: TokenScalar,
		description: 'E.g. box, vial, blister-pack. See http://hl7.org/fhir/SearchParameter/Medication-container.'
	},
	package_item: {
		type: GraphQLString,
		description: 'The item in the package. See http://hl7.org/fhir/SearchParameter/Medication-package-item.'
	},
	code: {
		type: TokenScalar,
		description: 'Codes that identify this medication. See http://hl7.org/fhir/SearchParameter/medications-code.'
	},
	ingredient: {
		type: GraphQLString,
		description: 'The product contained. See http://hl7.org/fhir/SearchParameter/Medication-ingredient.'
	},
	form: {
		type: TokenScalar,
		description: 'powder | tablets | capsule +. See http://hl7.org/fhir/SearchParameter/Medication-form.'
	},
	package_item_code: {
		type: TokenScalar,
		description: 'The item in the package. See http://hl7.org/fhir/SearchParameter/Medication-package-item-code.'
	},
	manufacturer: {
		type: GraphQLString,
		description: 'Manufacturer of the item. See http://hl7.org/fhir/SearchParameter/Medication-manufacturer.'
	},
	over_the_counter: {
		type: TokenScalar,
		description: 'True if medication does not require a prescription. See http://hl7.org/fhir/SearchParameter/Medication-over-the-counter.'
	},
	status: {
		type: TokenScalar,
		description: 'active | inactive | entered-in-error. See http://hl7.org/fhir/SearchParameter/Medication-status.'
	}
};
