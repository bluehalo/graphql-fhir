const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const moment = require('moment-timezone');
const xss = require('xss');

const { resolve } = require('../../../utils/resolve.utils');
const { DATE_CONFIG } = require(resolve('config'));

/**
 * @name exports
 * @summary DateTime Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'DateTimeScalar',
	description: 'Base StructureDefinition for dateTime Type: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.',
	serialize: value => moment(xss(sanitize(value))).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.datetime_format),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let date_pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		let sanitized_value = xss(sanitize(value));
		let is_date = date_pattern.test(sanitized_value);
		return is_date
			? moment(sanitized_value).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.datetime_format)
			: new GraphQLError(`Invalid dateTime provided to DateTimeScalar. Format should be ${DATE_CONFIG.datetime_format} and date's missing time will be filled with 0's.`, [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? moment(xss(sanitize(value))).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.datetime_format)
			: undefined;
	}
});
