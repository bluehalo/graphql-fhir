const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary TestScript Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScript_Input',
	description: 'Base StructureDefinition for TestScript Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'TestScript_Enum_input',
					values: { TestScript: { value: 'TestScript' } },
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
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the TestScript. This is an arbitrary value managed by the TestScript author manually.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the TestScript. This is an arbitrary value managed by the TestScript author manually.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A free text natural language name identifying the TestScript.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A free text natural language name identifying the TestScript.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the TestScript.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the TestScript.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'Identifier for the TestScript assigned for external purposes outside the context of FHIR.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'This TestScript was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'This TestScript was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the Test Script.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the Test Script.',
		},
		contact: {
			type: new GraphQLList(require('./testscriptcontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A free text natural language description of the TestScript and its use.',
		},
		description: {
			type: GraphQLString,
			description:
				'A free text natural language description of the TestScript and its use.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of Test Scripts.',
		},
		_requirements: {
			type: require('./element.input.js'),
			description:
				"Explains why this Test Script is needed and why it's been constrained as it has.",
		},
		requirements: {
			type: GraphQLString,
			description:
				"Explains why this Test Script is needed and why it's been constrained as it has.",
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.',
		},
		metadata: {
			type: require('./testscriptmetadata.input.js'),
			description:
				'The required capability must exist and are assumed to function correctly on the FHIR server being tested.',
		},
		_multiserver: {
			type: require('./element.input.js'),
			description:
				'If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.',
		},
		multiserver: {
			type: GraphQLBoolean,
			description:
				'If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.',
		},
		fixture: {
			type: new GraphQLList(require('./testscriptfixture.input.js')),
			description:
				'Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.',
		},
		profile: {
			type: new GraphQLList(GraphQLString),
			description: 'Reference to the profile to be used for validation.',
		},
		variable: {
			type: new GraphQLList(require('./testscriptvariable.input.js')),
			description:
				'Variable is set based either on element value in response body or on header field value in the response headers.',
		},
		setup: {
			type: require('./testscriptsetup.input.js'),
			description:
				'A series of required setup operations before tests are executed.',
		},
		test: {
			type: new GraphQLList(require('./testscripttest.input.js')),
			description: 'A test in this script.',
		},
		teardown: {
			type: require('./testscriptteardown.input.js'),
			description:
				'A series of operations required to clean up after the all the tests are executed (successfully or otherwise).',
		},
	}),
});
