const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const sanitize = require('sanitize-html');
const xss = require('xss');
const validator = require('validator');

const parse = (value, ast) => {
	let pattern = /^urn:oid:[0-2](\.[1-9]\d*)+/;
	let sanitized_value = validator.stripLow(xss(sanitize(value)).trim());
	let is_oid = pattern.test(sanitized_value);
	return is_oid
		? sanitized_value
		: new GraphQLError('Invalid value provided to OID Scalar. An OID must begin with \'urn:oid:\' and is a uri not an id. See http://hl7.org/fhir/datatypes.html for a description on oid under uri.');
}

/**
 * @name exports
 * @summary oid Scalar
 */
module.exports = new GraphQLScalarType({
	name: 'oid',
	description: 'Base StructureDefinition for oid type: An oid represented as a URI.',
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
