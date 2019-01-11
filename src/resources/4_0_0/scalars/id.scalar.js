const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary id scalar
 */
module.exports = new GraphQLScalarType({
	name: 'id',
	description:
		"Base StructureDefinition for id type: Any combination of letters, numerals, '-' and '.', with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.",
	// TODO: Implement serialization
	serialize: value => value,
	// TODO: Parse and sanitize here, throw a graphql error if things fail
	parseValue: (value, ast) => {
		return value;
	},
	// TODO: Parse and sanitize here as well, return undefined if unable to parse
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING ? value : undefined;
	},
});
