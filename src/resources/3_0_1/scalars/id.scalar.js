const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary ID Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'IdScalar',
	description: 'Base StructureDefinition for id type: Any combination of letters, numerals, \"-\" and \".\", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let pattern = /[A-Za-z0-9\\-\\.]{1,64}/;
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		let is_id = pattern.test(sanitized_value);
		return is_id
			? sanitized_value
			: new GraphQLError('Invalid value provided to IdScalar. Id may only contain A-Z, a-z, 0-9, "-", ".", with a limit of 64 characters.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? validator.stripLow(xss(sanitize(value)))
			: undefined;
	}
});
