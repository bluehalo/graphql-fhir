const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the coverage query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Coverage-beneficiary
	beneficiary: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.beneficiary',
		description: 'Covered party',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-class
	class: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.grouping.class',
		description: 'Class identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-dependent
	dependent: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.dependent',
		description: 'Dependent number',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-group
	group: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.grouping.group',
		description: 'Group identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.identifier',
		description: 'The primary identifier of the insured and the coverage',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-payor
	payor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.payor',
		description: 'The identity of the insurer or party paying for services',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-plan
	plan: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.grouping.plan',
		description: 'A plan or policy identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-policy-holder
	policy_holder: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.policyHolder',
		description: 'Reference to the policyholder',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-sequence
	sequence: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.sequence',
		description: 'Sequence number',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-subclass
	subclass: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.grouping.subClass',
		description: 'Sub-class identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-subgroup
	subgroup: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.grouping.subGroup',
		description: 'Sub-group identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-subplan
	subplan: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.grouping.subPlan',
		description: 'Sub-plan identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-subscriber
	subscriber: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.subscriber',
		description: 'Reference to the subscriber',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.type',
		description:
			'The kind of coverage (health plan, auto, Workers Compensation)',
	},
};
