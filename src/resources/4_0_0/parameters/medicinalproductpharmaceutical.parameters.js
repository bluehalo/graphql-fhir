const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductpharmaceutical query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProductPharmaceutical.identifier',
		description: 'An identifier for the pharmaceutical medicinal product',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-route
	route: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProductPharmaceutical.routeOfAdministration.code',
		description: 'Coded expression for the route',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-target-species
	target_species: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath:
			'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code',
		description: 'Coded expression for the species',
	},
};
