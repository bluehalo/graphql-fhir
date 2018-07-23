const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary Base64 Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'Base64Scalar',
	description: 'Base StructureDefinition for base64Binary Type: A stream of bytes.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		if (!validator.isBase64(sanitized_value) || !validator.isHash(sanitized_value, 'sha1')) {
			return new GraphQLError('Invalid value provided to Base64Scalar. String must be a valid base64 or sha1 encoded string.', [ ast ]);
		}
		return sanitized_value;
	},
	parseLiteral: ast => {
		let { value } = ast;
		return parseValue(value, ast);
	}
});
