const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary Code Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'CodeScalar',
	description: 'Base StructureDefinition for code type: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let pattern = /[^\\s]+([\\s]?[^\\s]+)*/;
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		let is_code = pattern.test(sanitized_value);
		return is_code
			? sanitized_value
			: new GraphQLError('Invalid value provided to CodeScalar. Code must contain one character, no leading or trailing whitespace, and no whitespace other than single spaces in the contents.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? validator.stripLow(xss(sanitize(value)))
			: undefined;
	}
});
