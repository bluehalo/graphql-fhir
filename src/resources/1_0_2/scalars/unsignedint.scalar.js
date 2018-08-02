const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary unsignedint Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'unsignedint',
	description: 'Base StructureDefinition for unsignedInt type: An integer with a value that is not negative (e.g. >= 0).',
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
