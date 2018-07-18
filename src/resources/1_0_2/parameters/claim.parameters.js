const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the claim query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'Patient. See http://hl7.org/fhir/SearchParameter/claim-patient.'
	},
	priority: {
		type: TokenScalar,
		description: 'Processing priority requested. See http://hl7.org/fhir/SearchParameter/claim-priority.'
	},
	use: {
		type: TokenScalar,
		description: 'The kind of financial resource. See http://hl7.org/fhir/SearchParameter/claim-use.'
	},
	provider: {
		type: GraphQLString,
		description: 'Provider responsible for the claim. See http://hl7.org/fhir/SearchParameter/claim-provider.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The primary identifier of the financial resource. See http://hl7.org/fhir/SearchParameter/claim-identifier.'
	}
};
