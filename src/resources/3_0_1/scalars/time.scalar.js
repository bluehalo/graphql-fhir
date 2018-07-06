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
 * @summary Time Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'TimeScalar',
	description: 'Base StructureDefinition for time Type: A time during the day, with no date specified.',
	serialize: value => moment(xss(sanitize(value))).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.time_format),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let time_pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?/;
		let sanitized_value = xss(sanitize(value));
		let is_time = time_pattern.test(sanitized_value);
		return is_time
			? moment(sanitized_value).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.time_format)
			: new GraphQLError(`Invalid time provided to TimeScalar. Format should be ${DATE_CONFIG}`, [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? moment(xss(sanitize(value)), DATE_CONFIG.time_format).tz(DATE_CONFIG.timezone).format(DATE_CONFIG.time_format)
			: undefined;
	}
});
