const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the coverage query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The primary identifier of the insured and the coverage. See http://hl7.org/fhir/SearchParameter/Coverage-identifier.'
	},
	subgroup: {
		type: GraphQLString,
		description: 'Sub-group identifier. See http://hl7.org/fhir/SearchParameter/Coverage-subgroup.'
	},
	subscriber: {
		type: GraphQLString,
		description: 'Reference to the subscriber. See http://hl7.org/fhir/SearchParameter/Coverage-subscriber.'
	},
	subplan: {
		type: GraphQLString,
		description: 'Sub-plan identifier. See http://hl7.org/fhir/SearchParameter/Coverage-subplan.'
	},
	type: {
		type: TokenScalar,
		description: 'The kind of coverage (health plan, auto, Workers Compensation). See http://hl7.org/fhir/SearchParameter/Coverage-type.'
	},
	sequence: {
		type: GraphQLString,
		description: 'Sequence number. See http://hl7.org/fhir/SearchParameter/Coverage-sequence.'
	},
	payor: {
		type: GraphQLString,
		description: 'The identity of the insurer or party paying for services. See http://hl7.org/fhir/SearchParameter/Coverage-payor.'
	},
	beneficiary: {
		type: GraphQLString,
		description: 'Covered party. See http://hl7.org/fhir/SearchParameter/Coverage-beneficiary.'
	},
	subclass: {
		type: GraphQLString,
		description: 'Sub-class identifier. See http://hl7.org/fhir/SearchParameter/Coverage-subclass.'
	},
	plan: {
		type: GraphQLString,
		description: 'A plan or policy identifier. See http://hl7.org/fhir/SearchParameter/Coverage-plan.'
	},
	class: {
		type: GraphQLString,
		description: 'Class identifier. See http://hl7.org/fhir/SearchParameter/Coverage-class.'
	},
	dependent: {
		type: GraphQLString,
		description: 'Dependent number. See http://hl7.org/fhir/SearchParameter/Coverage-dependent.'
	},
	group: {
		type: GraphQLString,
		description: 'Group identifier. See http://hl7.org/fhir/SearchParameter/Coverage-group.'
	},
	policy_holder: {
		type: GraphQLString,
		description: 'Reference to the policyholder. See http://hl7.org/fhir/SearchParameter/Coverage-policy-holder.'
	}
};
