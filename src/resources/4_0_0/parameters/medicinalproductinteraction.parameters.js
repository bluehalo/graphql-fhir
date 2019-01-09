const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductinteraction query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductInteraction-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductInteraction.subject',
		description: 'The medication for which this is an interaction',
	},
};
