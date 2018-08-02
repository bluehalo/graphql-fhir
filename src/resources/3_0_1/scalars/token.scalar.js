const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary token Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'token',
	description: 'Base StructureDefinition for token Type: String of characters used to identify a name or a resource.',
	// TODO: Implement proper serialization here
	serialize: value => value,
	// TODO: Implement proper parsing and sanitization here
	// Throw a GraphQL Error if unable to parse or sanitize error
	parseValue: (value, ast) => {
		return value;
	},
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? value
			: undefined;
	}
});
