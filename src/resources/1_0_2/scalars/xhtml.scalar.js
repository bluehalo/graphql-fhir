const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');

/**
 * @name exports
 * @summary xhtml scalar
 */
module.exports = new GraphQLScalarType({
	name: 'xhtml',
	description: 'Base StructureDefinition for xhtml type',
	// TODO: Implement serialization
	serialize: value => value,
	// TODO: Parse and sanitize here, throw a graphql error if things fail
	parseValue: (value, ast) => {
		return value;
	},
	// TODO: Parse and sanitize here as well, return undefined if unable to parse
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING ? value : undefined;
	},
});
