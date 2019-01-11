const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary dateTime scalar
 */
module.exports = new GraphQLScalarType({
	name: 'dateTime',
	description:
		'Base StructureDefinition for dateTime Type: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.',
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
