const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let StructureDefinitionResourceType = new GraphQLEnumType({
	name: 'StructureDefinitionResourceType',
	values: {
		StructureDefinition: { value: 'StructureDefinition' }
	}
});

/**
 * @name exports
 * @summary StructureDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinition',
	description: 'Base StructureDefinition for StructureDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(StructureDefinitionResourceType),
			description: 'Type of this resource.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published. The URL SHOULD include the major version of the structure definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published. The URL SHOULD include the major version of the structure definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the structure definition.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive, user-friendly title for the structure definition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this structure definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this structure definition. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the structure definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the structure definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the structure definition.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the structure definition.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the structure definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the structure definition from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate structure definition instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the structure definition is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this structure definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this structure definition is needed and why it has been designed as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/profile-code
		keyword: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates.'
		},
		fhirVersion: {
			type: IdScalar,
			description: 'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.'
		},
		_fhirVersion: {
			type: require('./element.schema'),
			description: 'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.'
		},
		mapping: {
			type: new GraphQLList(require('./structuredefinitionmapping.schema')),
			description: 'An external specification that the content is mapped to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/structure-definition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Defines the kind of structure that this definition is describing.'
		},
		_kind: {
			type: require('./element.schema'),
			description: 'Defines the kind of structure that this definition is describing.'
		},
		abstract: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.'
		},
		_abstract: {
			type: require('./element.schema'),
			description: 'Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/extension-context
		contextType: {
			type: CodeScalar,
			description: 'If this is an extension, Identifies the context within FHIR resources where the extension can be used.'
		},
		_contextType: {
			type: require('./element.schema'),
			description: 'If this is an extension, Identifies the context within FHIR resources where the extension can be used.'
		},
		context: {
			type: new GraphQLList(GraphQLString),
			description: 'Identifies the types of resource or data type elements to which the extension can be applied.'
		},
		_context: {
			type: require('./element.schema'),
			description: 'Identifies the types of resource or data type elements to which the extension can be applied.'
		},
		contextInvariant: {
			type: new GraphQLList(GraphQLString),
			description: 'A set of rules as Fluent Invariants about when the extension can be used (e.g. co-occurrence variants for the extension).'
		},
		_contextInvariant: {
			type: require('./element.schema'),
			description: 'A set of rules as Fluent Invariants about when the extension can be used (e.g. co-occurrence variants for the extension).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type this structure describes. If the derivation kind is \'specialization\' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type this structure describes. If the derivation kind is \'specialization\' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).'
		},
		baseDefinition: {
			type: UriScalar,
			description: 'An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.'
		},
		_baseDefinition: {
			type: require('./element.schema'),
			description: 'An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/type-derivation-rule
		derivation: {
			type: CodeScalar,
			description: 'How the type relates to the baseDefinition.'
		},
		_derivation: {
			type: require('./element.schema'),
			description: 'How the type relates to the baseDefinition.'
		},
		snapshot: {
			type: require('./structuredefinitionsnapshot.schema'),
			description: 'A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.'
		},
		differential: {
			type: require('./structuredefinitiondifferential.schema'),
			description: 'A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.'
		}
	})
});
