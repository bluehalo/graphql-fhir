const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	content: {
		type: GraphQLString,
		description:
			'A product in the package (See http://hl7.org/fhir/SearchParameter/medication-content).',
	},
	form: {
		type: TokenScalar,
		description:
			'powder | tablets | carton + (See http://hl7.org/fhir/SearchParameter/medication-form).',
	},
	container: {
		type: TokenScalar,
		description:
			'E.g. box, vial, blister-pack (See http://hl7.org/fhir/SearchParameter/medication-container).',
	},
	manufacturer: {
		type: GraphQLString,
		description:
			'Manufacturer of the item (See http://hl7.org/fhir/SearchParameter/medication-manufacturer).',
	},
	ingredient: {
		type: GraphQLString,
		description:
			'The product contained (See http://hl7.org/fhir/SearchParameter/medication-ingredient).',
	},
	code: {
		type: TokenScalar,
		description:
			'Codes that identify this medication (See http://hl7.org/fhir/SearchParameter/medication-code).',
	},
};
