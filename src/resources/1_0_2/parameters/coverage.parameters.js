const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the coverage query
 */
module.exports = {
	plan: {
		type: TokenScalar,
		description:
			'A plan or policy identifier (See http://hl7.org/fhir/SearchParameter/coverage-plan).',
	},
	issuer: {
		type: GraphQLString,
		description:
			'The identity of the insurer (See http://hl7.org/fhir/SearchParameter/coverage-issuer).',
	},
	sequence: {
		type: TokenScalar,
		description:
			'Sequence number (See http://hl7.org/fhir/SearchParameter/coverage-sequence).',
	},
	dependent: {
		type: TokenScalar,
		description:
			'Dependent number (See http://hl7.org/fhir/SearchParameter/coverage-dependent).',
	},
	group: {
		type: TokenScalar,
		description:
			'Group identifier (See http://hl7.org/fhir/SearchParameter/coverage-group).',
	},
	type: {
		type: TokenScalar,
		description:
			'The kind of coverage (See http://hl7.org/fhir/SearchParameter/coverage-type).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'The primary identifier of the insured (See http://hl7.org/fhir/SearchParameter/coverage-identifier).',
	},
	subplan: {
		type: TokenScalar,
		description:
			'Sub-plan identifier (See http://hl7.org/fhir/SearchParameter/coverage-subplan).',
	},
};
