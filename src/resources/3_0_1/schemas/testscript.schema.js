const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let TestScriptResourceType = new GraphQLEnumType({
	name: 'TestScriptResourceType',
	values: {
		TestScript: { value: 'TestScript' }
	}
});

/**
 * @name exports
 * @summary TestScript Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScript',
	description: 'Base StructureDefinition for TestScript Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(TestScriptResourceType),
			description: 'Type of this resource'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this test script is (or will be) published. The URL SHOULD include the major version of the test script. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this test script is (or will be) published. The URL SHOULD include the major version of the test script. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the test script.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive, user-friendly title for the test script.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this test script. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this test script. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the test script was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the test script was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the test script.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the test script.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the test script from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the test script from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate test script instances.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the test script is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this test script is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this test script is needed and why it has been designed as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.'
		},
		origin: {
			type: new GraphQLList(require('./testscriptorigin.schema')),
			description: 'An abstract server used in operations within this test script in the origin element.'
		},
		destination: {
			type: new GraphQLList(require('./testscriptdestination.schema')),
			description: 'An abstract server used in operations within this test script in the destination element.'
		},
		metadata: {
			type: require('./testscriptmetadata.schema'),
			description: 'The required capability must exist and are assumed to function correctly on the FHIR server being tested.'
		},
		fixture: {
			type: new GraphQLList(require('./testscriptfixture.schema')),
			description: 'Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.'
		},
		profile: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Reference to the profile to be used for validation.'
		},
		variable: {
			type: new GraphQLList(require('./testscriptvariable.schema')),
			description: 'Variable is set based either on element value in response body or on header field value in the response headers.'
		},
		rule: {
			type: new GraphQLList(require('./testscriptrule.schema')),
			description: 'Assert rule to be used in one or more asserts within the test script.'
		},
		ruleset: {
			type: new GraphQLList(require('./testscriptruleset.schema')),
			description: 'Contains one or more rules.  Offers a way to group rules so assertions could reference the group of rules and have them all applied.'
		},
		setup: {
			type: require('./testscriptsetup.schema'),
			description: 'A series of required setup operations before tests are executed.'
		},
		test: {
			type: new GraphQLList(require('./testscripttest.schema')),
			description: 'A test in this script.'
		},
		teardown: {
			type: require('./testscriptteardown.schema'),
			description: 'A series of operations required to clean up after the all the tests are executed (successfully or otherwise).'
		}
	})
});
