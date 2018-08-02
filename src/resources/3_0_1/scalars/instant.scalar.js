const { GraphQLScalarType } = require('graphql');

/**
 * @name exports
 * @summary instant Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'instant',
	description: 'Base StructureDefinition for instant Type: An instant in time - known at least to the second.',
	// TODO: Implement proper serialization here
	serialize: value => value,
	// TODO: Implement proper parsing and sanitization here
	// Throw a GraphQL Error if unable to parse or sanitize error
	parseValue: (value, ast) => value,
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return value;
	}
});
