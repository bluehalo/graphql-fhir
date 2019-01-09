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
 * @summary OperationDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationDefinition_Input',
	description: 'Base StructureDefinition for OperationDefinition Resource',
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
				'An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A free text natural language name identifying the operation.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A free text natural language name identifying the operation.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the profile.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the profile.',
		},
		_kind: {
			type: require('./element.input.js'),
			description: 'Whether this is an operation or a named query.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/operation-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an operation or a named query.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'This profile was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'This profile was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the operation definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the operation definition.',
		},
		contact: {
			type: new GraphQLList(require('./operationdefinitioncontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A free text natural language description of the profile and its use.',
		},
		description: {
			type: GraphQLString,
			description:
				'A free text natural language description of the profile and its use.',
		},
		_requirements: {
			type: require('./element.input.js'),
			description:
				"Explains why this operation definition is needed and why it's been constrained as it has.",
		},
		requirements: {
			type: GraphQLString,
			description:
				"Explains why this operation definition is needed and why it's been constrained as it has.",
		},
		_idempotent: {
			type: require('./element.input.js'),
			description:
				'Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.',
		},
		idempotent: {
			type: GraphQLBoolean,
			description:
				'Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.',
		},
		_code: {
			type: require('./element.input.js'),
			description: 'The name used to invoke the operation.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name used to invoke the operation.',
		},
		_notes: {
			type: require('./element.input.js'),
			description:
				'Additional information about how to use this operation or named query.',
		},
		notes: {
			type: GraphQLString,
			description:
				'Additional information about how to use this operation or named query.',
		},
		base: {
			type: GraphQLString,
			description:
				'Indicates that this operation definition is a constraining profile on the base.',
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
				'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLList(CodeScalar),
			description:
				'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).',
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
		parameter: {
			type: new GraphQLList(require('./operationdefinitionparameter.input.js')),
			description: 'The parameters for the operation/query.',
		},
	}),
});
