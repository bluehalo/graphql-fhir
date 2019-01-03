const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let OperationDefinitionResourceType = new GraphQLEnumType({
	name: 'OperationDefinitionResourceType',
	values: {
		OperationDefinition: { value: 'OperationDefinition' }
	}
});

/**
 * @name exports
 * @summary OperationDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationDefinition',
	description: 'Base StructureDefinition for OperationDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(OperationDefinitionResourceType),
			description: 'Type of this resource.'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published. The URL SHOULD include the major version of the operation definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published. The URL SHOULD include the major version of the operation definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this operation definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this operation definition. Enables tracking the life-cycle of the content.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operation-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an operation or a named query.'
		},
		_kind: {
			type: require('./element.schema'),
			description: 'Whether this is an operation or a named query.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the operation definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the operation definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the operation definition.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the operation definition.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the operation definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the operation definition from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate operation definition instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the operation definition is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this operation definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this operation definition is needed and why it has been designed as it has.'
		},
		idempotent: {
			type: GraphQLBoolean,
			description: 'Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.'
		},
		_idempotent: {
			type: require('./element.schema'),
			description: 'Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.'
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name used to invoke the operation.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'The name used to invoke the operation.'
		},
		comment: {
			type: GraphQLString,
			description: 'Additional information about how to use this operation or named query.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'Additional information about how to use this operation or named query.'
		},
		base: {
			type: require('./reference.schema'),
			description: 'Indicates that this operation definition is a constraining profile on the base.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		resource: {
			type: new GraphQLList(CodeScalar),
			description: 'The types on which this operation can be executed.'
		},
		_resource: {
			type: require('./element.schema'),
			description: 'The types on which this operation can be executed.'
		},
		system: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).'
		},
		_system: {
			type: require('./element.schema'),
			description: 'Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).'
		},
		type: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).'
		},
		instance: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Indicates whether this operation can be invoked on a particular instance of one of the given types.'
		},
		_instance: {
			type: require('./element.schema'),
			description: 'Indicates whether this operation can be invoked on a particular instance of one of the given types.'
		},
		parameter: {
			type: new GraphQLList(require('./operationdefinitionparameter.schema')),
			description: 'The parameters for the operation/query.'
		},
		overload: {
			type: new GraphQLList(require('./operationdefinitionoverload.schema')),
			description: 'Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.'
		}
	})
});
