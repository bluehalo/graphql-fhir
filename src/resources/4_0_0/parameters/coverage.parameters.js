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
	// http://hl7.org/fhir/SearchParameter/Coverage-class-type
	class_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.class.type',
		description: 'Coverage class (eg. plan, group)',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-class-value
	class_value: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.class.value',
		description: 'Value of the class (eg. Plan number, group number)',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-dependent
	dependent: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Coverage.dependent',
		description: 'Dependent number',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.identifier',
		description: 'The primary identifier of the insured and the coverage',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.beneficiary',
		description: 'Retrieve coverages for a patient',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-payor
	payor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.payor',
		description: 'The identity of the insurer or party paying for services',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-policy-holder
	policy_holder: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.policyHolder',
		description: 'Reference to the policyholder',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.status',
		description: 'The status of the Coverage',
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
