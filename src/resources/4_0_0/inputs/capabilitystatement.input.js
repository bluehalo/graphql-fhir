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
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatement_Input',
	description:
		'A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CapabilityStatement_Enum_input',
					values: { CapabilityStatement: { value: 'CapabilityStatement' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.input.js'),
			description:
				'A short, descriptive, user-friendly title for the capability statement.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the capability statement.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this capability statement. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this capability statement. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The date  (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the organization or individual that published the capability statement.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the capability statement.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate capability statement instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the capability statement is intended to be used.',
		},
		_purpose: {
			type: require('./element.input.js'),
			description:
				'Explanation of why this capability statement is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this capability statement is needed and why it has been designed as it has.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.',
		},
		_kind: {
			type: require('./element.input.js'),
			description:
				'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).',
		},
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).',
		},
		_instantiates: {
			type: require('./element.input.js'),
			description:
				'Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details.',
		},
		instantiates: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details.',
		},
		_imports: {
			type: require('./element.input.js'),
			description:
				'Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them.',
		},
		imports: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them.',
		},
		software: {
			type: require('./capabilitystatementsoftware.input.js'),
			description:
				'Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.',
		},
		implementation: {
			type: require('./capabilitystatementimplementation.input.js'),
			description:
				'Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.',
		},
		_fhirVersion: {
			type: require('./element.input.js'),
			description:
				'The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value.',
		},
		fhirVersion: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value.',
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
		_patchFormat: {
			type: require('./element.input.js'),
			description:
				'A list of the patch formats supported by this implementation using their content types.',
		},
		patchFormat: {
			type: new GraphQLList(CodeScalar),
			description:
				'A list of the patch formats supported by this implementation using their content types.',
		},
		_implementationGuide: {
			type: require('./element.input.js'),
			description:
				'A list of implementation guides that the server does (or should) support in their entirety.',
		},
		implementationGuide: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'A list of implementation guides that the server does (or should) support in their entirety.',
		},
		rest: {
			type: new GraphQLList(require('./capabilitystatementrest.input.js')),
			description:
				'A definition of the restful capabilities of the solution, if any.',
		},
		messaging: {
			type: new GraphQLList(require('./capabilitystatementmessaging.input.js')),
			description:
				'A description of the messaging capabilities of the solution.',
		},
		document: {
			type: new GraphQLList(require('./capabilitystatementdocument.input.js')),
			description: 'A document definition.',
		},
	}),
});
