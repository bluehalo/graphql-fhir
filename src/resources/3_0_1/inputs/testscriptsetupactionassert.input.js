const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary TestScriptsetupactionassert Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptsetupactionassert_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_label: {
			type: require('./element.input.js'),
			description:
				'The label would be used for tracking/logging purposes by test engines.',
		},
		label: {
			type: GraphQLString,
			description:
				'The label would be used for tracking/logging purposes by test engines.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'The description would be used by test engines for tracking and reporting purposes.',
		},
		description: {
			type: GraphQLString,
			description:
				'The description would be used by test engines for tracking and reporting purposes.',
		},
		_direction: {
			type: require('./element.input.js'),
			description: 'The direction to use for the assertion.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-direction-codes
		direction: {
			type: CodeScalar,
			description: 'The direction to use for the assertion.',
		},
		_compareToSourceId: {
			type: require('./element.input.js'),
			description:
				"Id of the source fixture used as the contents to be evaluated by either the 'source/expression' or 'sourceId/path' definition.",
		},
		compareToSourceId: {
			type: GraphQLString,
			description:
				"Id of the source fixture used as the contents to be evaluated by either the 'source/expression' or 'sourceId/path' definition.",
		},
		_compareToSourceExpression: {
			type: require('./element.input.js'),
			description:
				'The fluentpath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.',
		},
		compareToSourceExpression: {
			type: GraphQLString,
			description:
				'The fluentpath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.',
		},
		_compareToSourcePath: {
			type: require('./element.input.js'),
			description:
				'XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.',
		},
		compareToSourcePath: {
			type: GraphQLString,
			description:
				'XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.',
		},
		_contentType: {
			type: require('./element.input.js'),
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
		contentType: {
			type: CodeScalar,
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.",
		},
		_expression: {
			type: require('./element.input.js'),
			description:
				'The fluentpath expression to be evaluated against the request or response message contents - HTTP headers and payload.',
		},
		expression: {
			type: GraphQLString,
			description:
				'The fluentpath expression to be evaluated against the request or response message contents - HTTP headers and payload.',
		},
		_headerField: {
			type: require('./element.input.js'),
			description: "The HTTP header field name e.g. 'Location'.",
		},
		headerField: {
			type: GraphQLString,
			description: "The HTTP header field name e.g. 'Location'.",
		},
		_minimumId: {
			type: require('./element.input.js'),
			description:
				'The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.',
		},
		minimumId: {
			type: GraphQLString,
			description:
				'The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.',
		},
		_navigationLinks: {
			type: require('./element.input.js'),
			description:
				'Whether or not the test execution performs validation on the bundle navigation links.',
		},
		navigationLinks: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution performs validation on the bundle navigation links.',
		},
		_operator: {
			type: require('./element.input.js'),
			description:
				'The operator type defines the conditional behavior of the assert. If not defined, the default is equals.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-operator-codes
		operator: {
			type: CodeScalar,
			description:
				'The operator type defines the conditional behavior of the assert. If not defined, the default is equals.',
		},
		_path: {
			type: require('./element.input.js'),
			description:
				'The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.',
		},
		path: {
			type: GraphQLString,
			description:
				'The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.',
		},
		_requestMethod: {
			type: require('./element.input.js'),
			description:
				'The request method or HTTP operation code to compare against that used by the client system under test.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/http-operations
		requestMethod: {
			type: CodeScalar,
			description:
				'The request method or HTTP operation code to compare against that used by the client system under test.',
		},
		_requestURL: {
			type: require('./element.input.js'),
			description:
				'The value to use in a comparison against the request URL path string.',
		},
		requestURL: {
			type: GraphQLString,
			description:
				'The value to use in a comparison against the request URL path string.',
		},
		_resource: {
			type: require('./element.input.js'),
			description:
				'The type of the resource.  See http://build.fhir.org/resourcelist.html.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		resource: {
			type: CodeScalar,
			description:
				'The type of the resource.  See http://build.fhir.org/resourcelist.html.',
		},
		_response: {
			type: require('./element.input.js'),
			description:
				'okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-response-code-types
		response: {
			type: CodeScalar,
			description:
				'okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.',
		},
		_responseCode: {
			type: require('./element.input.js'),
			description: 'The value of the HTTP response code to be tested.',
		},
		responseCode: {
			type: GraphQLString,
			description: 'The value of the HTTP response code to be tested.',
		},
		rule: {
			type: require('./testscriptsetupactionassertrule.input.js'),
			description: 'The TestScript.rule this assert will evaluate.',
		},
		ruleset: {
			type: require('./testscriptsetupactionassertruleset.input.js'),
			description: 'The TestScript.ruleset this assert will evaluate.',
		},
		_sourceId: {
			type: require('./element.input.js'),
			description:
				'Fixture to evaluate the XPath/JSONPath expression or the headerField  against.',
		},
		sourceId: {
			type: IdScalar,
			description:
				'Fixture to evaluate the XPath/JSONPath expression or the headerField  against.',
		},
		_validateProfileId: {
			type: require('./element.input.js'),
			description: 'The ID of the Profile to validate against.',
		},
		validateProfileId: {
			type: IdScalar,
			description: 'The ID of the Profile to validate against.',
		},
		_value: {
			type: require('./element.input.js'),
			description: 'The value to compare to.',
		},
		value: {
			type: GraphQLString,
			description: 'The value to compare to.',
		},
		_warningOnly: {
			type: require('./element.input.js'),
			description:
				'Whether or not the test execution will produce a warning only on error for this assert.',
		},
		warningOnly: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution will produce a warning only on error for this assert.',
		},
	}),
});
