const {
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary TestScriptsetupactionassert Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptsetupactionassert',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_label: {
			type: require('./element.schema.js'),
			description:
				'The label would be used for tracking/logging purposes by test engines.',
		},
		label: {
			type: GraphQLString,
			description:
				'The label would be used for tracking/logging purposes by test engines.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'The description would be used by test engines for tracking and reporting purposes.',
		},
		description: {
			type: GraphQLString,
			description:
				'The description would be used by test engines for tracking and reporting purposes.',
		},
		_direction: {
			type: require('./element.schema.js'),
			description: 'The direction to use for the assertion.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-direction-codes
		direction: {
			type: CodeScalar,
			description: 'The direction to use for the assertion.',
		},
		_compareToSourceId: {
			type: require('./element.schema.js'),
			description:
				"Id of fixture used to compare the 'sourceId/path' evaluations to.",
		},
		compareToSourceId: {
			type: GraphQLString,
			description:
				"Id of fixture used to compare the 'sourceId/path' evaluations to.",
		},
		_compareToSourcePath: {
			type: require('./element.schema.js'),
			description:
				"XPath or JSONPath expression against fixture used to compare the 'sourceId/path' evaluations to.",
		},
		compareToSourcePath: {
			type: GraphQLString,
			description:
				"XPath or JSONPath expression against fixture used to compare the 'sourceId/path' evaluations to.",
		},
		_contentType: {
			type: require('./element.schema.js'),
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
		contentType: {
			type: CodeScalar,
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.",
		},
		_headerField: {
			type: require('./element.schema.js'),
			description: "The HTTP header field name e.g. 'Location'.",
		},
		headerField: {
			type: GraphQLString,
			description: "The HTTP header field name e.g. 'Location'.",
		},
		_minimumId: {
			type: require('./element.schema.js'),
			description:
				'The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.',
		},
		minimumId: {
			type: GraphQLString,
			description:
				'The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.',
		},
		_navigationLinks: {
			type: require('./element.schema.js'),
			description:
				'Whether or not the test execution performs validation on the bundle navigation links.',
		},
		navigationLinks: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution performs validation on the bundle navigation links.',
		},
		_operator: {
			type: require('./element.schema.js'),
			description: 'The operator type.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/assert-operator-codes
		operator: {
			type: CodeScalar,
			description: 'The operator type.',
		},
		_path: {
			type: require('./element.schema.js'),
			description:
				'The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.',
		},
		path: {
			type: GraphQLString,
			description:
				'The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.',
		},
		_resource: {
			type: require('./element.schema.js'),
			description:
				'The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		resource: {
			type: CodeScalar,
			description:
				'The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.',
		},
		_response: {
			type: require('./element.schema.js'),
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
			type: require('./element.schema.js'),
			description: 'The value of the HTTP response code to be tested.',
		},
		responseCode: {
			type: GraphQLString,
			description: 'The value of the HTTP response code to be tested.',
		},
		_sourceId: {
			type: require('./element.schema.js'),
			description:
				'Fixture to evaluate the XPath/JSONPath expression or the headerField  against.',
		},
		sourceId: {
			type: IdScalar,
			description:
				'Fixture to evaluate the XPath/JSONPath expression or the headerField  against.',
		},
		_validateProfileId: {
			type: require('./element.schema.js'),
			description: 'The ID of the Profile to validate against.',
		},
		validateProfileId: {
			type: IdScalar,
			description: 'The ID of the Profile to validate against.',
		},
		_value: {
			type: require('./element.schema.js'),
			description: 'The value to compare to.',
		},
		value: {
			type: GraphQLString,
			description: 'The value to compare to.',
		},
		_warningOnly: {
			type: require('./element.schema.js'),
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
