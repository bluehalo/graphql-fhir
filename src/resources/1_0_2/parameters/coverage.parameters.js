const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the coverage query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Coverage-dependent
	dependent: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.dependent',
		description: 'Dependent number',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-group
	group: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.group',
		description: 'Group identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.identifier',
		description: 'The primary identifier of the insured',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-issuer
	issuer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Coverage.issuer',
		description: 'The identity of the insurer',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-plan
	plan: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.plan',
		description: 'A plan or policy identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-sequence
	sequence: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.sequence',
		description: 'Sequence number',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-subplan
	subplan: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.subPlan',
		description: 'Sub-plan identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Coverage-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Coverage.type',
		description: 'The kind of coverage',
	},
};
