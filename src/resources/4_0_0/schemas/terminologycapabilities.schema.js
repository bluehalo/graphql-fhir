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
 * @summary TerminologyCapabilities Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TerminologyCapabilities',
	description:
		'A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'TerminologyCapabilities_Enum_schema',
					values: {
						TerminologyCapabilities: { value: 'TerminologyCapabilities' },
					},
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
				'An absolute URI that is used to identify this terminology capabilities when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this terminology capabilities is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the terminology capabilities is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this terminology capabilities when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this terminology capabilities is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the terminology capabilities is stored on different servers.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the terminology capabilities when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the terminology capabilities author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the terminology capabilities when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the terminology capabilities author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the terminology capabilities. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the terminology capabilities. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the terminology capabilities.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the terminology capabilities.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this terminology capabilities. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this terminology capabilities. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A Boolean value to indicate that this terminology capabilities is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this terminology capabilities is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the terminology capabilities was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the terminology capabilities changes.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The date  (and optionally time) when the terminology capabilities was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the terminology capabilities changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the organization or individual that published the terminology capabilities.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the terminology capabilities.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the terminology capabilities from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the terminology capabilities from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate terminology capabilities instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the terminology capabilities is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explanation of why this terminology capabilities is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this terminology capabilities is needed and why it has been designed as it has.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.',
		},
		_kind: {
			type: require('./element.schema.js'),
			description:
				'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).',
		},
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).',
		},
		software: {
			type: require('./terminologycapabilitiessoftware.schema.js'),
			description:
				'Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.',
		},
		implementation: {
			type: require('./terminologycapabilitiesimplementation.schema.js'),
			description:
				'Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.',
		},
		_lockedDate: {
			type: require('./element.schema.js'),
			description: 'Whether the server supports lockedDate.',
		},
		lockedDate: {
			type: GraphQLBoolean,
			description: 'Whether the server supports lockedDate.',
		},
		codeSystem: {
			type: new GraphQLList(
				require('./terminologycapabilitiescodesystem.schema.js'),
			),
			description:
				'Identifies a code system that is supported by the server. If there is a no code system URL, then this declares the general assumptions a client can make about support for any CodeSystem resource.',
		},
		expansion: {
			type: require('./terminologycapabilitiesexpansion.schema.js'),
			description:
				'Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.',
		},
		_codeSearch: {
			type: require('./element.schema.js'),
			description:
				'The degree to which the server supports the code search parameter on ValueSet, if it is supported.',
		},
		codeSearch: {
			type: CodeScalar,
			description:
				'The degree to which the server supports the code search parameter on ValueSet, if it is supported.',
		},
		validateCode: {
			type: require('./terminologycapabilitiesvalidatecode.schema.js'),
			description:
				'Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.',
		},
		translation: {
			type: require('./terminologycapabilitiestranslation.schema.js'),
			description:
				'Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.',
		},
		closure: {
			type: require('./terminologycapabilitiesclosure.schema.js'),
			description: 'Whether the $closure operation is supported.',
		},
	}),
});
