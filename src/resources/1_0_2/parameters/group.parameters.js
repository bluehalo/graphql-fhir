const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the group query
 */
module.exports = {
	member: {
		type: GraphQLString,
		description:
			'Reference to the group member (See http://hl7.org/fhir/SearchParameter/group-member).',
	},
	characteristic_value: {
		type: GraphQLString,
		description:
			'A composite of both characteristic and value (See http://hl7.org/fhir/SearchParameter/group-characteristic-value).',
	},
	value: {
		type: TokenScalar,
		description:
			'Value held by characteristic (See http://hl7.org/fhir/SearchParameter/group-value).',
	},
	actual: {
		type: TokenScalar,
		description:
			'Descriptive or actual (See http://hl7.org/fhir/SearchParameter/group-actual).',
	},
	exclude: {
		type: TokenScalar,
		description:
			'Group includes or excludes (See http://hl7.org/fhir/SearchParameter/group-exclude).',
	},
	code: {
		type: TokenScalar,
		description:
			'The kind of resources contained (See http://hl7.org/fhir/SearchParameter/group-code).',
	},
	characteristic: {
		type: TokenScalar,
		description:
			'Kind of characteristic (See http://hl7.org/fhir/SearchParameter/group-characteristic).',
	},
	type: {
		type: TokenScalar,
		description:
			'The type of resources the group contains (See http://hl7.org/fhir/SearchParameter/group-type).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Unique id (See http://hl7.org/fhir/SearchParameter/group-identifier).',
	},
};
