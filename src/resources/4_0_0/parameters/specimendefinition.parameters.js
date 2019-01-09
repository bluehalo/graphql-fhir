const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the specimendefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/SpecimenDefinition-container
	container: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SpecimenDefinition.typeTested.container.type',
		description:
			'The type of specimen conditioned in container expected by the lab',
	},
	// http://hl7.org/fhir/SearchParameter/SpecimenDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SpecimenDefinition.identifier',
		description: 'The unique identifier associated with the specimen',
	},
	// http://hl7.org/fhir/SearchParameter/SpecimenDefinition-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SpecimenDefinition.typeCollected',
		description: 'The type of collected specimen',
	},
};
