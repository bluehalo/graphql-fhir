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
		let time_pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
		let sanitized_value = xss(sanitize(value)).trim();
		let is_time = time_pattern.test(sanitized_value);
		return is_time
			? moment(sanitized_value).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.time_format)
			: new GraphQLError(`Invalid time provided to TimeScalar. Format should be ${DATE_CONFIG}`, [ ast ]);
	},
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return parseValue(value, ast);
	}
});
