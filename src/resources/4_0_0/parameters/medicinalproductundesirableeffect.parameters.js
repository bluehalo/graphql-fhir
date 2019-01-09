const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductundesirableeffect query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductUndesirableEffect-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductUndesirableEffect.subject',
		description: 'The medication for which this is an undesirable effect',
	},
};
