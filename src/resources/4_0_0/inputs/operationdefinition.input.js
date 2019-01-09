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
 * @summary OperationDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationDefinition_Input',
	description:
		'A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'OperationDefinition_Enum_input',
					values: { OperationDefinition: { value: 'OperationDefinition' } },
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
				'An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.input.js'),
			description:
				'A short, descriptive, user-friendly title for the operation definition.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the operation definition.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this operation definition. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this operation definition. Enables tracking the life-cycle of the content.',
		},
		_kind: {
			type: require('./element.input.js'),
			description: 'Whether this is an operation or a named query.',
		},
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an operation or a named query.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the operation definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the operation definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the organization or individual that published the operation definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the operation definition.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the operation definition from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the operation definition from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate operation definition instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the operation definition is intended to be used.',
		},
		_purpose: {
			type: require('./element.input.js'),
			description:
				'Explanation of why this operation definition is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this operation definition is needed and why it has been designed as it has.',
		},
		_affectsState: {
			type: require('./element.input.js'),
			description:
				"Whether the operation affects state. Side effects such as producing audit trail entries do not count as 'affecting  state'.",
		},
		affectsState: {
			type: GraphQLBoolean,
			description:
				"Whether the operation affects state. Side effects such as producing audit trail entries do not count as 'affecting  state'.",
		},
		_code: {
			type: require('./element.input.js'),
			description: 'The name used to invoke the operation.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name used to invoke the operation.',
		},
		_comment: {
			type: require('./element.input.js'),
			description:
				'Additional information about how to use this operation or named query.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Additional information about how to use this operation or named query.',
		},
		_base: {
			type: require('./element.input.js'),
			description:
				'Indicates that this operation definition is a constraining profile on the base.',
		},
		base: {
			type: CanonicalScalar,
			description:
				'Indicates that this operation definition is a constraining profile on the base.',
		},
		_resource: {
			type: require('./element.input.js'),
			description: 'The types on which this operation can be executed.',
		},
		resource: {
			type: new GraphQLList(CodeScalar),
			description: 'The types on which this operation can be executed.',
		},
		_system: {
			type: require('./element.input.js'),
			description:
				'Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).',
		},
		system: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).',
		},
		type: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).',
		},
		_instance: {
			type: require('./element.input.js'),
			description:
				'Indicates whether this operation can be invoked on a particular instance of one of the given types.',
		},
		instance: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicates whether this operation can be invoked on a particular instance of one of the given types.',
		},
		_inputProfile: {
			type: require('./element.input.js'),
			description:
				'Additional validation information for the in parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource as a whole.',
		},
		inputProfile: {
			type: CanonicalScalar,
			description:
				'Additional validation information for the in parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource as a whole.',
		},
		_outputProfile: {
			type: require('./element.input.js'),
			description:
				'Additional validation information for the out parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource.',
		},
		outputProfile: {
			type: CanonicalScalar,
			description:
				'Additional validation information for the out parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource.',
		},
		parameter: {
			type: new GraphQLList(require('./operationdefinitionparameter.input.js')),
			description: 'The parameters for the operation/query.',
		},
		overload: {
			type: new GraphQLList(require('./operationdefinitionoverload.input.js')),
			description:
				'Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.',
		},
	}),
});
