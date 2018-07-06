const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary Token Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'TokenScalar',
	description: 'String representation of a system|code. E.g. http://hl7.org/fhir/v3/AdministrativeGender|female.'
		+ ' Can also be |female or just female, all we are really doing here is sanitizing the string passed in.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		return sanitized_value
			? sanitized_value
			: new GraphQLError('Invalid value provided to TokenScalar. String must be system|code, |code, or code.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? validator.stripLow(xss(sanitize(value)))
			: undefined;
	}
});
