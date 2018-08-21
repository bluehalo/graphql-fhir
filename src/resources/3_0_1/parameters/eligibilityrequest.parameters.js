const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityrequest query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The business identifier of the Eligibility. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier.'
	},
	provider: {
		type: GraphQLString,
		description: 'The reference to the provider. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-provider.'
	},
	patient: {
		type: GraphQLString,
		description: 'The reference to the patient. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-patient.'
	},
	created: {
		type: DateScalar,
		description: 'The creation date for the EOB. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-created.'
	},
	organization: {
		type: GraphQLString,
		description: 'The reference to the providing organization. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-organization.'
	},
	enterer: {
		type: GraphQLString,
		description: 'The party who is responsible for the request. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-enterer.'
	},
	facility: {
		type: GraphQLString,
		description: 'Facility responsible for the goods and services. See http://hl7.org/fhir/SearchParameter/EligibilityRequest-facility.'
	}
};
