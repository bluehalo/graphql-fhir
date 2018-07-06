const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary Instant Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'InstantScalar',
	description: 'An instant in time - known at least to the second.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		return sanitized_value
			? sanitized_value
			: new GraphQLError('Invalid value provided to InstantScalar. Must be a valid string.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? validator.stripLow(xss(sanitize(value)))
			: undefined;
	}
});
