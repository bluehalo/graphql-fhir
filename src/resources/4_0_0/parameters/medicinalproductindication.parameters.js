const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductindication query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductIndication-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductIndication.subject',
		description: 'The medication for which this is an indication',
	},
};
