const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let CapabilityStatementResourceInputType = new GraphQLEnumType({
	name: 'CapabilityStatementResourceInputType',
	values: {
		CapabilityStatement: { value: 'CapabilityStatement' }
	}
});

/**
 * @name exports
 * @summary CapabilityStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatement_Input',
	description: 'Base StructureDefinition for CapabilityStatement Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(CapabilityStatementResourceInputType),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this capability statement is (or will be) published. The URL SHOULD include the major version of the capability statement. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this capability statement is (or will be) published. The URL SHOULD include the major version of the capability statement. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the capability statement.'
		},
		_title: {
			type: require('./element.input'),
			description: 'A short, descriptive, user-friendly title for the capability statement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this capability statement. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this capability statement. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date  (and optionally time) when the capability statement was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the capability statement was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the capability statement.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the capability statement.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the capability statement from a consumer\'s perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the capability statement from a consumer\'s perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate capability statement instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A legal or geographic region in which the capability statement is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this capability statement is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.input'),
			description: 'Explaination of why this capability statement is needed and why it has been designed as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/capability-statement-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).'
		},
		_kind: {
			type: require('./element.input'),
			description: 'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).'
		},
		instantiates: {
			type: new GraphQLList(UriScalar),
			description: 'Reference to a canonical URL of another CapabilityStatement that this software implements or uses. This capability statement is a published API description that corresponds to a business service. The rest of the capability statement does not need to repeat the details of the referenced resource, but can do so.'
		},
		_instantiates: {
			type: require('./element.input'),
			description: 'Reference to a canonical URL of another CapabilityStatement that this software implements or uses. This capability statement is a published API description that corresponds to a business service. The rest of the capability statement does not need to repeat the details of the referenced resource, but can do so.'
		},
		software: {
			type: require('./capabilitystatementsoftware.input'),
			description: 'Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.'
		},
		implementation: {
			type: require('./capabilitystatementimplementation.input'),
			description: 'Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.'
		},
		fhirVersion: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The version of the FHIR specification on which this capability statement is based.'
		},
		_fhirVersion: {
			type: require('./element.input'),
			description: 'The version of the FHIR specification on which this capability statement is based.'
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
		patchFormat: {
			type: new GraphQLList(CodeScalar),
			description: 'A list of the patch formats supported by this implementation using their content types.'
		},
		_patchFormat: {
			type: require('./element.input'),
			description: 'A list of the patch formats supported by this implementation using their content types.'
		},
		implementationGuide: {
			type: new GraphQLList(UriScalar),
			description: 'A list of implementation guides that the server does (or should) support in their entirety.'
		},
		_implementationGuide: {
			type: require('./element.input'),
			description: 'A list of implementation guides that the server does (or should) support in their entirety.'
		},
		profile: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A list of profiles that represent different use cases supported by the system. For a server, \'supported by the system\' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).'
		},
		rest: {
			type: new GraphQLList(require('./capabilitystatementrest.input')),
			description: 'A definition of the restful capabilities of the solution, if any.'
		},
		messaging: {
			type: new GraphQLList(require('./capabilitystatementmessaging.input')),
			description: 'A description of the messaging capabilities of the solution.'
		},
		document: {
			type: new GraphQLList(require('./capabilitystatementdocument.input')),
			description: 'A document definition.'
		}
	})
});
