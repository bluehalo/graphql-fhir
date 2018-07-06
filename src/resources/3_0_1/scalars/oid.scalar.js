const { GraphQLScalarType } = require('graphql');
const { GraphQLError } = require('graphql/error');
const { Kind } = require('graphql/language');
const sanitize = require('sanitize-html');
const validator = require('validator');
const xss = require('xss');

/**
 * @name exports
 * @summary OID Scalar, should be a string value
 */
module.exports = new GraphQLScalarType({
	name: 'OidScalar',
	description: 'Base StructureDefinition for oid type: An OID represented as a URI.',
	serialize: value => validator.stripLow(xss(sanitize(value))),
	// parseValue is required since we are specifying a parseLiteral function
	parseValue: (value, ast) => {
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*))*/;
		let sanitized_value = validator.stripLow(xss(sanitize(value)));
		let is_oid = pattern.test(sanitized_value);
		return is_oid
			? sanitized_value
			: new GraphQLError('Invalid value provided to OidScalar. Oid uri must begin with \'urn:oid:\'. See http://hl7.org/fhir/datatypes.html for description on Oid.', [ ast ]);
	},
	parseLiteral: ast => {
		let { kind, value } = ast;
		return kind === Kind.STRING
			? validator.stripLow(xss(sanitize(value)))
			: undefined;
	}
});
