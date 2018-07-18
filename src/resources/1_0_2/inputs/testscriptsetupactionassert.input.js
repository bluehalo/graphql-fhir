const CodeScalar = require('../scalars/code.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestScriptSetupActionAssert Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupActionAssert_Input',
	description: 'Evaluates the results of previous operations to determine if the server under test behaves appropriately.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		label: {
			type: GraphQLString,
			description: 'The label would be used for tracking/logging purposes by test engines.'
		},
		_label: {
			type: require('./element.input'),
			description: 'The label would be used for tracking/logging purposes by test engines.'
		},
		description: {
			type: GraphQLString,
			description: 'The description would be used by test engines for tracking and reporting purposes.'
		},
		_description: {
			type: require('./element.input'),
			description: 'The description would be used by test engines for tracking and reporting purposes.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/assert-direction-codes
		direction: {
			type: CodeScalar,
			description: 'The direction to use for the assertion.'
		},
		_direction: {
			type: require('./element.input'),
			description: 'The direction to use for the assertion.'
		},
		compareToSourceId: {
			type: GraphQLString,
			description: 'Id of fixture used to compare the \'sourceId/path\' evaluations to.'
		},
		_compareToSourceId: {
			type: require('./element.input'),
			description: 'Id of fixture used to compare the \'sourceId/path\' evaluations to.'
		},
		compareToSourcePath: {
			type: GraphQLString,
			description: 'XPath or JSONPath expression against fixture used to compare the \'sourceId/path\' evaluations to.'
		},
		_compareToSourcePath: {
			type: require('./element.input'),
			description: 'XPath or JSONPath expression against fixture used to compare the \'sourceId/path\' evaluations to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/content-type
		contentType: {
			type: CodeScalar,
			description: 'The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.'
		},
		_contentType: {
			type: require('./element.input'),
			description: 'The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.'
		},
		headerField: {
			type: GraphQLString,
			description: 'The HTTP header field name e.g. \'Location\'.'
		},
		_headerField: {
			type: require('./element.input'),
			description: 'The HTTP header field name e.g. \'Location\'.'
		},
		minimumId: {
			type: GraphQLString,
			description: 'The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.'
		},
		_minimumId: {
			type: require('./element.input'),
			description: 'The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.'
		},
		navigationLinks: {
			type: GraphQLBoolean,
			description: 'Whether or not the test execution performs validation on the bundle navigation links.'
		},
		_navigationLinks: {
			type: require('./element.input'),
			description: 'Whether or not the test execution performs validation on the bundle navigation links.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/assert-operator-codes
		operator: {
			type: CodeScalar,
			description: 'The operator type.'
		},
		_operator: {
			type: require('./element.input'),
			description: 'The operator type.'
		},
		path: {
			type: GraphQLString,
			description: 'The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.'
		},
		_path: {
			type: require('./element.input'),
			description: 'The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		resource: {
			type: CodeScalar,
			description: 'The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.'
		},
		_resource: {
			type: require('./element.input'),
			description: 'The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/assert-response-code-types
		response: {
			type: CodeScalar,
			description: 'okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.'
		},
		_response: {
			type: require('./element.input'),
			description: 'okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.'
		},
		responseCode: {
			type: GraphQLString,
			description: 'The value of the HTTP response code to be tested.'
		},
		_responseCode: {
			type: require('./element.input'),
			description: 'The value of the HTTP response code to be tested.'
		},
		sourceId: {
			type: IdScalar,
			description: 'Fixture to evaluate the XPath/JSONPath expression or the headerField  against.'
		},
		_sourceId: {
			type: require('./element.input'),
			description: 'Fixture to evaluate the XPath/JSONPath expression or the headerField  against.'
		},
		validateProfileId: {
			type: IdScalar,
			description: 'The ID of the Profile to validate against.'
		},
		_validateProfileId: {
			type: require('./element.input'),
			description: 'The ID of the Profile to validate against.'
		},
		value: {
			type: GraphQLString,
			description: 'The value to compare to.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The value to compare to.'
		},
		warningOnly: {
			type: GraphQLBoolean,
			description: 'Whether or not the test execution will produce a warning only on error for this assert.'
		},
		_warningOnly: {
			type: require('./element.input'),
			description: 'Whether or not the test execution will produce a warning only on error for this assert.'
		}
	})
});
