const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary id Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'id',
	description:
		"Base StructureDefinition for id type: Any combination of letters, numerals, '-' and '.', with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.",
	// TODO: Implement proper serialization here
	serialize: value => value,
	// TODO: Implement proper parsing and sanitization here
	// Throw a GraphQL Error if unable to parse or sanitize error
	parseValue: (value, ast) => value,
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return value;
	},
});
