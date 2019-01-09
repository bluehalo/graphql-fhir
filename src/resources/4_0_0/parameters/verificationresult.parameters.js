const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the verificationresult query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/VerificationResult-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'VerificationResult.target',
		description: 'A resource that was validated',
	},
};
