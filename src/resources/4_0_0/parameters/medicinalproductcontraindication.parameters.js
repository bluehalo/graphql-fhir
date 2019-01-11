const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductcontraindication query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductContraindication-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductContraindication.subject',
		description: 'The medication for which this is an contraindication',
	},
};
