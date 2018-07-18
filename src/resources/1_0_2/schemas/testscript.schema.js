const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestScript Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScript',
	description: 'Base StructureDefinition for TestScript Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the TestScript. This is an arbitrary value managed by the TestScript author manually.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the TestScript. This is an arbitrary value managed by the TestScript author manually.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A free text natural language name identifying the TestScript.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A free text natural language name identifying the TestScript.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the TestScript.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the TestScript.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifier for the TestScript assigned for external purposes outside the context of FHIR.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'This TestScript was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'This TestScript was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the Test Script.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the Test Script.'
		},
		contact: {
			type: new GraphQLList(require('./testscriptcontact.schema')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the TestScript and its use.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the TestScript and its use.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of Test Scripts.'
		},
		requirements: {
			type: GraphQLString,
			description: 'Explains why this Test Script is needed and why it\'s been constrained as it has.'
		},
		_requirements: {
			type: require('./element.schema'),
			description: 'Explains why this Test Script is needed and why it\'s been constrained as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.'
		},
		metadata: {
			type: require('./testscriptmetadata.schema'),
			description: 'The required capability must exist and are assumed to function correctly on the FHIR server being tested.'
		},
		multiserver: {
			type: GraphQLBoolean,
			description: 'If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.'
		},
		_multiserver: {
			type: require('./element.schema'),
			description: 'If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.'
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
