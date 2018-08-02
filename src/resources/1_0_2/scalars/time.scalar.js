const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary time Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'time',
	description: 'Base StructureDefinition for time Type: A time during the day, with no date specified.',
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
