const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const sanitize = require('sanitize-html');
const moment = require('moment-timezone');
const xss = require('xss');

const { resolve } = require('../../../utils/resolve.utils');
const { DATE_CONFIG } = require(resolve('config'));

const parse = (value, ast) => {
	/* date pattern was simplified from document specified pattern of:
		/-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/
		The day portion of the date is optional. ie 2018-12 or 2018-12-01 are both valid */
	let date_pattern = /^[12]\d{3}-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?$/;
	let sanitized_value = xss(sanitize(value)).trim();
	let is_date = date_pattern.test(sanitized_value);
	return is_date
		? moment(sanitized_value).format(DATE_CONFIG.dateFormat)
		: new GraphQLError(`Invalid date provided to DateScalar. Format should be ${DATE_CONFIG.dateFormat}`);
}

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
	parseValue: (value, ast) => parse(value, ast),
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return parse(value, ast);
	}
});
