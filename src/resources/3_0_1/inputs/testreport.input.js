const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary TestReport Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReport_Input',
	description: 'Base StructureDefinition for TestReport Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'TestReport_Enum_input',
					values: { TestReport: { value: 'TestReport' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'Identifier for the TestScript assigned for external purposes outside the context of FHIR.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A free text natural language name identifying the executed TestScript.',
		},
		name: {
			type: GraphQLString,
			description:
				'A free text natural language name identifying the executed TestScript.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The current state of this test report.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/report-status-codes
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of this test report.',
		},
		testScript: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.',
		},
		_result: {
			type: require('./element.input.js'),
			description: 'The overall result from the execution of the TestScript.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/report-result-codes
		result: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The overall result from the execution of the TestScript.',
		},
		_score: {
			type: require('./element.input.js'),
			description:
				'The final score (percentage of tests passed) resulting from the execution of the TestScript.',
		},
		score: {
			type: GraphQLFloat,
			description:
				'The final score (percentage of tests passed) resulting from the execution of the TestScript.',
		},
		_tester: {
			type: require('./element.input.js'),
			description:
				'Name of the tester producing this report (Organization or individual).',
		},
		tester: {
			type: GraphQLString,
			description:
				'Name of the tester producing this report (Organization or individual).',
		},
		_issued: {
			type: require('./element.input.js'),
			description:
				'When the TestScript was executed and this TestReport was generated.',
		},
		issued: {
			type: DateTimeScalar,
			description:
				'When the TestScript was executed and this TestReport was generated.',
		},
		participant: {
			type: new GraphQLList(require('./testreportparticipant.input.js')),
			description:
				'A participant in the test execution, either the execution engine, a client, or a server.',
		},
		setup: {
			type: require('./testreportsetup.input.js'),
			description:
				'The results of the series of required setup operations before the tests were executed.',
		},
		test: {
			type: new GraphQLList(require('./testreporttest.input.js')),
			description: 'A test executed from the test script.',
		},
		teardown: {
			type: require('./testreportteardown.input.js'),
			description:
				'The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).',
		},
	}),
});
