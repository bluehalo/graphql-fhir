const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the claim query
 */
module.exports = {
	care_team: {
		type: GraphQLString,
		description: 'Member of the CareTeam. See http://hl7.org/fhir/SearchParameter/Claim-care-team.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The primary identifier of the financial resource. See http://hl7.org/fhir/SearchParameter/Claim-identifier.'
	},
	use: {
		type: TokenScalar,
		description: 'The kind of financial resource. See http://hl7.org/fhir/SearchParameter/Claim-use.'
	},
	created: {
		type: DateScalar,
		description: 'The creation date for the Claim. See http://hl7.org/fhir/SearchParameter/Claim-created.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounters associated with a billed line item. See http://hl7.org/fhir/SearchParameter/Claim-encounter.'
	},
	priority: {
		type: TokenScalar,
		description: 'Processing priority requested. See http://hl7.org/fhir/SearchParameter/Claim-priority.'
	},
	payee: {
		type: GraphQLString,
		description: 'The party receiving any payment for the Claim. See http://hl7.org/fhir/SearchParameter/Claim-payee.'
	},
	provider: {
		type: GraphQLString,
		description: 'Provider responsible for the Claim. See http://hl7.org/fhir/SearchParameter/Claim-provider.'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient receiving the services. See http://hl7.org/fhir/SearchParameter/Claim-patient.'
	},
	insurer: {
		type: GraphQLString,
		description: 'The target payor/insurer for the Claim. See http://hl7.org/fhir/SearchParameter/Claim-insurer.'
	},
	organization: {
		type: GraphQLString,
		description: 'The reference to the providing organization. See http://hl7.org/fhir/SearchParameter/Claim-organization.'
	},
	enterer: {
		type: GraphQLString,
		description: 'The party responsible for the entry of the Claim. See http://hl7.org/fhir/SearchParameter/Claim-enterer.'
	},
	facility: {
		type: GraphQLString,
		description: 'Facility responsible for the goods and services. See http://hl7.org/fhir/SearchParameter/Claim-facility.'
	}
};
