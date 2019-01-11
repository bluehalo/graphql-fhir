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
 * @summary OperationDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationDefinition',
	description: 'Base StructureDefinition for OperationDefinition Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'OperationDefinition_Enum_schema',
					values: { OperationDefinition: { value: 'OperationDefinition' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published. The URL SHOULD include the major version of the operation definition. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published. The URL SHOULD include the major version of the operation definition. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this operation definition. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this operation definition. Enables tracking the life-cycle of the content.',
		},
		_kind: {
			type: require('./element.schema.js'),
			description: 'Whether this is an operation or a named query.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/operation-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an operation or a named query.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the operation definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the operation definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization that published the operation definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the operation definition.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the operation definition from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the operation definition from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate operation definition instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the operation definition is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explaination of why this operation definition is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explaination of why this operation definition is needed and why it has been designed as it has.',
		},
		_idempotent: {
			type: require('./element.schema.js'),
			description:
				'Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.',
		},
		idempotent: {
			type: GraphQLBoolean,
			description:
				'Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.',
		},
		_code: {
			type: require('./element.schema.js'),
			description: 'The name used to invoke the operation.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name used to invoke the operation.',
		},
		_comment: {
			type: require('./element.schema.js'),
			description:
				'Additional information about how to use this operation or named query.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Additional information about how to use this operation or named query.',
		},
		base: {
			type: new GraphQLUnionType({
				name: 'OperationDefinitionbase_base_Union',
				description:
					'Indicates that this operation definition is a constraining profile on the base.',
				types: () => [require('./operationdefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'OperationDefinition') {
						return require('./operationdefinition.schema.js');
					}
				},
			}),
			description:
				'Indicates that this operation definition is a constraining profile on the base.',
		},
		_resource: {
			type: require('./element.schema.js'),
			description: 'The types on which this operation can be executed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		resource: {
			type: new GraphQLList(CodeScalar),
			description: 'The types on which this operation can be executed.',
		},
		_system: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).',
		},
		system: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).',
		},
		type: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).',
		},
		_instance: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether this operation can be invoked on a particular instance of one of the given types.',
		},
		instance: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Indicates whether this operation can be invoked on a particular instance of one of the given types.',
		},
		parameter: {
			type: new GraphQLList(
				require('./operationdefinitionparameter.schema.js'),
			),
			description: 'The parameters for the operation/query.',
		},
		overload: {
			type: new GraphQLList(require('./operationdefinitionoverload.schema.js')),
			description:
				'Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.',
		},
	}),
});
