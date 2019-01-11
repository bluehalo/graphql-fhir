const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductpackaged query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductPackaged-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProductPackaged.identifier',
		description: 'Unique identifier',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductPackaged-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductPackaged.subject',
		description: 'The product with this is a pack for',
	},
};
