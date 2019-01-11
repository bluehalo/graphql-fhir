const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary TestScript Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScript',
	description:
		'A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'TestScript_Enum_schema',
					values: { TestScript: { value: 'TestScript' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this test script is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test script is stored on different servers.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this test script is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test script is stored on different servers.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the test script.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the test script.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this test script. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this test script. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A Boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the test script was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the test script was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the organization or individual that published the test script.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the test script.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the test script from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the test script from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate test script instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the test script is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explanation of why this test script is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this test script is needed and why it has been designed as it has.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.',
		},
		origin: {
			type: new GraphQLList(require('./testscriptorigin.schema.js')),
			description:
				'An abstract server used in operations within this test script in the origin element.',
		},
		destination: {
			type: new GraphQLList(require('./testscriptdestination.schema.js')),
			description:
				'An abstract server used in operations within this test script in the destination element.',
		},
		metadata: {
			type: require('./testscriptmetadata.schema.js'),
			description:
				'The required capability must exist and are assumed to function correctly on the FHIR server being tested.',
		},
		fixture: {
			type: new GraphQLList(require('./testscriptfixture.schema.js')),
			description:
				'Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.',
		},
		profile: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'TestScriptprofile_profile_Union',
					description: 'Reference to the profile to be used for validation.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description: 'Reference to the profile to be used for validation.',
		},
		variable: {
			type: new GraphQLList(require('./testscriptvariable.schema.js')),
			description:
				'Variable is set based either on element value in response body or on header field value in the response headers.',
		},
		setup: {
			type: require('./testscriptsetup.schema.js'),
			description:
				'A series of required setup operations before tests are executed.',
		},
		test: {
			type: new GraphQLList(require('./testscripttest.schema.js')),
			description: 'A test in this script.',
		},
		teardown: {
			type: require('./testscriptteardown.schema.js'),
			description:
				'A series of operations required to clean up after all the tests are executed (successfully or otherwise).',
		},
	}),
});
