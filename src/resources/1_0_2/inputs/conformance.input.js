const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ConformanceResourceInputType = new GraphQLEnumType({
	name: 'ConformanceResourceInputType',
	values: {
		Conformance: { value: 'Conformance' }
	}
});

/**
 * @name exports
 * @summary Conformance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Conformance_Input',
	description: 'Base StructureDefinition for Conformance Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ConformanceResourceInputType),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.'
		},
		name: {
			type: GraphQLString,
			description: 'A free text natural language name identifying the conformance statement.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A free text natural language name identifying the conformance statement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: CodeScalar,
			description: 'The status of this conformance statement.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this conformance statement.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the conformance.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the conformance.'
		},
		contact: {
			type: new GraphQLList(require('./conformancecontact.input')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.'
		},
		requirements: {
			type: GraphQLString,
			description: 'Explains why this conformance statement is needed and why it\'s been constrained as it has.'
		},
		_requirements: {
			type: require('./element.input'),
			description: 'Explains why this conformance statement is needed and why it\'s been constrained as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-statement-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).'
		},
		_kind: {
			type: require('./element.input'),
			description: 'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).'
		},
		software: {
			type: require('./conformancesoftware.input'),
			description: 'Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.'
		},
		implementation: {
			type: require('./conformanceimplementation.input'),
			description: 'Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.'
		},
		fhirVersion: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The version of the FHIR specification on which this conformance statement is based.'
		},
		_fhirVersion: {
			type: require('./element.input'),
			description: 'The version of the FHIR specification on which this conformance statement is based.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/unknown-content-code
		acceptUnknown: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that indicates whether the application accepts unknown elements or extensions when reading resources.'
		},
		_acceptUnknown: {
			type: require('./element.input'),
			description: 'A code that indicates whether the application accepts unknown elements or extensions when reading resources.'
		},
		format: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'A list of the formats supported by this implementation using their content types.'
		},
		_format: {
			type: require('./element.input'),
			description: 'A list of the formats supported by this implementation using their content types.'
		},
		profile: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A list of profiles that represent different use cases supported by the system. For a server, \'supported by the system\' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.'
		},
		rest: {
			type: new GraphQLList(require('./conformancerest.input')),
			description: 'A definition of the restful capabilities of the solution, if any.'
		},
		messaging: {
			type: new GraphQLList(require('./conformancemessaging.input')),
			description: 'A description of the messaging capabilities of the solution.'
		},
		document: {
			type: new GraphQLList(require('./conformancedocument.input')),
			description: 'A document definition.'
		}
	})
});
