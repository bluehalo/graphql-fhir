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
 * @summary Conformance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Conformance_Input',
	description: 'Base StructureDefinition for Conformance Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Conformance_Enum_input',
					values: { Conformance: { value: 'Conformance' } },
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
				'An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A free text natural language name identifying the conformance statement.',
		},
		name: {
			type: GraphQLString,
			description:
				'A free text natural language name identifying the conformance statement.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of this conformance statement.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: CodeScalar,
			description: 'The status of this conformance statement.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the conformance.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the conformance.',
		},
		contact: {
			type: new GraphQLList(require('./conformancecontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.',
		},
		description: {
			type: GraphQLString,
			description:
				'A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.',
		},
		_requirements: {
			type: require('./element.input.js'),
			description:
				"Explains why this conformance statement is needed and why it's been constrained as it has.",
		},
		requirements: {
			type: GraphQLString,
			description:
				"Explains why this conformance statement is needed and why it's been constrained as it has.",
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.',
		},
		_kind: {
			type: require('./element.input.js'),
			description:
				'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-statement-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).',
		},
		software: {
			type: require('./conformancesoftware.input.js'),
			description:
				'Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.',
		},
		implementation: {
			type: require('./conformanceimplementation.input.js'),
			description:
				'Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.',
		},
		_fhirVersion: {
			type: require('./element.input.js'),
			description:
				'The version of the FHIR specification on which this conformance statement is based.',
		},
		fhirVersion: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'The version of the FHIR specification on which this conformance statement is based.',
		},
		_acceptUnknown: {
			type: require('./element.input.js'),
			description:
				'A code that indicates whether the application accepts unknown elements or extensions when reading resources.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/unknown-content-code
		acceptUnknown: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code that indicates whether the application accepts unknown elements or extensions when reading resources.',
		},
		_format: {
			type: require('./element.input.js'),
			description:
				'A list of the formats supported by this implementation using their content types.',
		},
		format: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description:
				'A list of the formats supported by this implementation using their content types.',
		},
		profile: {
			type: new GraphQLList(GraphQLString),
			description:
				"A list of profiles that represent different use cases supported by the system. For a server, 'supported by the system' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.",
		},
		rest: {
			type: new GraphQLList(require('./conformancerest.input.js')),
			description:
				'A definition of the restful capabilities of the solution, if any.',
		},
		messaging: {
			type: new GraphQLList(require('./conformancemessaging.input.js')),
			description:
				'A description of the messaging capabilities of the solution.',
		},
		document: {
			type: new GraphQLList(require('./conformancedocument.input.js')),
			description: 'A document definition.',
		},
	}),
});
