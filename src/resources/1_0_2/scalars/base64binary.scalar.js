const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary base64binary Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'base64binary',
	description: 'Base StructureDefinition for base64Binary Type: A stream of bytes.',
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
