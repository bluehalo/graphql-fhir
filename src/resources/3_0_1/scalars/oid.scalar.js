const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary oid Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'oid',
	description: 'Base StructureDefinition for oid type: An OID represented as a URI.',
	// TODO: Implement proper serialization here
	serialize: value => value,
	// TODO: Implement proper parsing and sanitization here
	// Throw a GraphQL Error if unable to parse or sanitize error
	parseValue: (value, ast) => {
		return value;
	},
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return parseValue(value, ast);
	}
});
