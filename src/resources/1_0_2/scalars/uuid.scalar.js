const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const sanitize = require('sanitize-html');
const xss = require('xss');
const validator = require('validator');

const parse = (value, ast) => {
	let pattern = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
	let sanitized_value = validator.stripLow(xss(sanitize(value)).trim());
	let is_uuid = pattern.test(sanitized_value);
	return is_uuid
		? sanitized_value
		: new GraphQLError(
				"Invalid value provided to UuidScalar. A UUID must begin with 'urn:uuid:' and is a uri not an id. See http://hl7.org/fhir/datatypes.html for a description on uuid under uri.",
		  );
};

/**
 * @name exports
 * @summary uuid Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'uuid',
	description:
		'Base StructureDefinition for uuid type: A UUID, represented as a URI.',
	// TODO: Implement proper serialization here
	serialize: value => value,
	// TODO: Implement proper parsing and sanitization here
	// Throw a GraphQL Error if unable to parse or sanitize error
	parseValue: (value, ast) => parse(value, ast),
	// TODO: Implement proper parsing and sanitization here
	parseLiteral: ast => {
		let { value } = ast;
		return parse(value, ast);
	},
});
