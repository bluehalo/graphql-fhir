const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const validator = require('validator');

/**
 * @name exports
 * @summary PositiveIntScalar Scalar, should be a positive integer > 0
 */
module.exports = new GraphQLScalarType({
	name: 'PositiveIntScalar',
	description: 'Base StructureDefinition for positiveInt type: An integer with a value that is positive (e.g. >0).',
	serialize: value => validator.toInt(value),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let sanitized_value = validator.toInt(value);
		return sanitized_value
			? sanitized_value && sanitized_value > 0
			: new GraphQLError('Invalid value provided to PositiveIntScalar. Int must be > 0.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.INT
			? validator.toInt(value)
			: undefined;
	}
});
