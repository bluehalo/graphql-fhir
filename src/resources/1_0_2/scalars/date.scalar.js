const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary date Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'date',
	description: 'Base StructureDefinition for date Type: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.',
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
