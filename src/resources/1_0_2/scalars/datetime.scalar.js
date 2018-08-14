const { GraphQLScalarType } = require('graphql');
const sanitize = require('sanitize-html');
const moment = require('moment-timezone');
const xss = require('xss');

const { resolve } = require('../../../utils/resolve.utils');
const { DATE_CONFIG } = require(resolve('config'));

const parse = (value, ast) => {
	/* date pattern was simplified from document specified pattern of:
		/-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/
		The day portion of the date is optional. If hours and minutes are
		specified, a time zone SHALL be populated. Seconds must be provided
		due to schema type constraints but may be zero-filled and may be
		ignored. Dates SHALL be valid dates. The time "24:00" is not allowed */
	let date_pattern = /^[12]\d{3}-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?$/
	let sanitized_value = xss(sanitize(value));
	let is_date = date_pattern.test(sanitized_value);
	return is_date
		? moment(sanitized_value).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.datetime_format)
		: new GraphQLError(`Invalid dateTime provided to DateTimeScalar. Format should be ${DATE_CONFIG.datetime_format} and date's missing time will be filled with 0's.`);
}

/**
 * @name exports
 * @summary datetime Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'datetime',
	description: 'Base StructureDefinition for dateTime Type: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.',
	// TODO: Implement proper serialization here
	serialize: value => value,
	// TODO: Implement proper parsing and sanitization here
	// Throw a GraphQL Error if unable to parse or sanitize error
	parseValue: (value, ast) => parse(value, ast),
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return parse(value, ast);
	}
});
