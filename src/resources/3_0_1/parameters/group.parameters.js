const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the group query
 */
module.exports = {
	actual: {
		type: TokenScalar,
		description: 'Descriptive or actual. See http://hl7.org/fhir/SearchParameter/Group-actual.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique id. See http://hl7.org/fhir/SearchParameter/Group-identifier.'
	},
	characteristic_value: {
		type: GraphQLString,
		description: 'A composite of both characteristic and value. See http://hl7.org/fhir/SearchParameter/Group-characteristic-value.'
	},
	code: {
		type: TokenScalar,
		description: 'The kind of resources contained. See http://hl7.org/fhir/SearchParameter/Group-code.'
	},
	member: {
		type: GraphQLString,
		description: 'Reference to the group member. See http://hl7.org/fhir/SearchParameter/Group-member.'
	},
	exclude: {
		type: TokenScalar,
		description: 'Group includes or excludes. See http://hl7.org/fhir/SearchParameter/Group-exclude.'
	},
	type: {
		type: TokenScalar,
		description: 'The type of resources the group contains. See http://hl7.org/fhir/SearchParameter/Group-type.'
	},
	value: {
		type: TokenScalar,
		description: 'Value held by characteristic. See http://hl7.org/fhir/SearchParameter/Group-value.'
	},
	characteristic: {
		type: TokenScalar,
		description: 'Kind of characteristic. See http://hl7.org/fhir/SearchParameter/Group-characteristic.'
	}
};
