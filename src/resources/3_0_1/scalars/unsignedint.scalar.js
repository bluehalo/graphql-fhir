const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const validator = require('validator');

const parse = (value, ast) => {
	try {
		return validator.isInt(value, { min: 0, max: Number.MAX_SAFE_INTEGER })
			? validator.toInt(value, 10)
			: new GraphQLError('Invalid value provided to UnsignedIntScalar. Int must be >= 0.');
	} catch (e) {
		return new GraphQLError('Unsupported type value provided to unsigned int. String Int must be >= 0.');
	}
}

/**
 * @name exports
 * @summary unsignedint Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'unsignedint',
	description: 'Base StructureDefinition for unsignedInt type: An integer with a value that is not negative (e.g. >= 0).',
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
