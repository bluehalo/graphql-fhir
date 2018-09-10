const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityresponse query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The business identifier (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier).'
	},
	request: {
		type: GraphQLString,
		description: 'The EligibilityRequest reference (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-request).'
	},
	disposition: {
		type: GraphQLString,
		description: 'The contents of the disposition message (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-disposition).'
	},
	insurer: {
		type: GraphQLString,
		description: 'The organization which generated this resource (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-insurer).'
	},
	created: {
		type: DateScalar,
		description: 'The creation date (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-created).'
	},
	request_organization: {
		type: GraphQLString,
		description: 'The EligibilityRequest organization (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-organization).'
	},
	request_provider: {
		type: GraphQLString,
		description: 'The EligibilityRequest provider (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-provider).'
	},
	outcome: {
		type: TokenScalar,
		description: 'The processing outcome (See http://hl7.org/fhir/SearchParameter/EligibilityResponse-outcome).'
	}
};
