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
 * @summary Date Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'DateScalar',
	description: 'Base StructureDefinition for date Type: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.',
	serialize: value => moment(xss(sanitize(value))).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.date_format),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let date_pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		let sanitized_value = xss(sanitize(value));
		let is_date = date_pattern.test(sanitized_value);
		return is_date
			? moment(sanitized_value).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.date_format)
			: new GraphQLError(`Invalid date provided to DateScalar. Format should be ${DATE_CONFIG.date_format}`, [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? moment(xss(sanitize(value))).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.date_format)
			: undefined;
	}
});
