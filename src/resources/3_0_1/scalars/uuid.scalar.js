const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary UUID Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'UuidScalar',
	description: 'Base StructureDefinition for uuid type: A UUID, represented as a URI.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		let is_uuid = pattern.test(sanitized_value);
		return is_uuid
			? sanitized_value
			: new GraphQLError('Invalid value provided to UuidScalar. A UUID must begin with \'urn:uuid:\' and is a uri not an id. See http://hl7.org/fhir/datatypes.html for a description on uuid under uri.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? validator.stripLow(xss(sanitize(value)))
			: undefined;
	}
});
