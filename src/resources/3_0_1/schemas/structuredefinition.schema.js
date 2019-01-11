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
 * @summary StructureDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinition',
	description: 'Base StructureDefinition for StructureDefinition Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'StructureDefinition_Enum_schema',
					values: { StructureDefinition: { value: 'StructureDefinition' } },
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
				'An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published. The URL SHOULD include the major version of the structure definition. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published. The URL SHOULD include the major version of the structure definition. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the structure definition.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the structure definition.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this structure definition. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this structure definition. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the structure definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the structure definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization that published the structure definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the structure definition.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the structure definition from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the structure definition from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate structure definition instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the structure definition is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explaination of why this structure definition is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explaination of why this structure definition is needed and why it has been designed as it has.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/profile-code
		keyword: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates.',
		},
		_fhirVersion: {
			type: require('./element.schema.js'),
			description:
				'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.',
		},
		fhirVersion: {
			type: IdScalar,
			description:
				'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.',
		},
		mapping: {
			type: new GraphQLList(require('./structuredefinitionmapping.schema.js')),
			description: 'An external specification that the content is mapped to.',
		},
		_kind: {
			type: require('./element.schema.js'),
			description:
				'Defines the kind of structure that this definition is describing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/structure-definition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Defines the kind of structure that this definition is describing.',
		},
		_abstract: {
			type: require('./element.schema.js'),
			description:
				'Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.',
		},
		abstract: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.',
		},
		_contextType: {
			type: require('./element.schema.js'),
			description:
				'If this is an extension, Identifies the context within FHIR resources where the extension can be used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/extension-context
		contextType: {
			type: CodeScalar,
			description:
				'If this is an extension, Identifies the context within FHIR resources where the extension can be used.',
		},
		_context: {
			type: require('./element.schema.js'),
			description:
				'Identifies the types of resource or data type elements to which the extension can be applied.',
		},
		context: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies the types of resource or data type elements to which the extension can be applied.',
		},
		_contextInvariant: {
			type: require('./element.schema.js'),
			description:
				'A set of rules as Fluent Invariants about when the extension can be used (e.g. co-occurrence variants for the extension).',
		},
		contextInvariant: {
			type: new GraphQLList(GraphQLString),
			description:
				'A set of rules as Fluent Invariants about when the extension can be used (e.g. co-occurrence variants for the extension).',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				"The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).",
		},
		_baseDefinition: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.',
		},
		baseDefinition: {
			type: UriScalar,
			description:
				'An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.',
		},
		_derivation: {
			type: require('./element.schema.js'),
			description: 'How the type relates to the baseDefinition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/type-derivation-rule
		derivation: {
			type: CodeScalar,
			description: 'How the type relates to the baseDefinition.',
		},
		snapshot: {
			type: require('./structuredefinitionsnapshot.schema.js'),
			description:
				'A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.',
		},
		differential: {
			type: require('./structuredefinitiondifferential.schema.js'),
			description:
				'A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.',
		},
	}),
});
