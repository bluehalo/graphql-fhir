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
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary CodeSystem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystem_Input',
	description: 'Base StructureDefinition for CodeSystem Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CodeSystem_Enum_input',
					values: { CodeSystem: { value: 'CodeSystem' } },
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
				'An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this code system is (or will be) published. The URL SHOULD include the major version of the code system. For more information see [Technical and Business Versions](resource.html#versions). This is used in [Coding]{datatypes.html#Coding}.system.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this code system is (or will be) published. The URL SHOULD include the major version of the code system. For more information see [Technical and Business Versions](resource.html#versions). This is used in [Coding]{datatypes.html#Coding}.system.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding]{datatypes.html#Coding}.version.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding]{datatypes.html#Coding}.version.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.input.js'),
			description:
				'A short, descriptive, user-friendly title for the code system.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the code system.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this code system. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this code system. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the code system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the code system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the code system.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the code system.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the code system from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the code system from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate code system instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the code system is intended to be used.',
		},
		_purpose: {
			type: require('./element.input.js'),
			description:
				'Explaination of why this code system is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explaination of why this code system is needed and why it has been designed as it has.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.',
		},
		_caseSensitive: {
			type: require('./element.input.js'),
			description:
				'If code comparison is case sensitive when codes within this system are compared to each other.',
		},
		caseSensitive: {
			type: GraphQLBoolean,
			description:
				'If code comparison is case sensitive when codes within this system are compared to each other.',
		},
		_valueSet: {
			type: require('./element.input.js'),
			description:
				'Canonical URL of value set that contains the entire code system.',
		},
		valueSet: {
			type: UriScalar,
			description:
				'Canonical URL of value set that contains the entire code system.',
		},
		_hierarchyMeaning: {
			type: require('./element.input.js'),
			description: 'The meaning of the hierarchy of concepts.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning
		hierarchyMeaning: {
			type: CodeScalar,
			description: 'The meaning of the hierarchy of concepts.',
		},
		_compositional: {
			type: require('./element.input.js'),
			description: 'True If code system defines a post-composition grammar.',
		},
		compositional: {
			type: GraphQLBoolean,
			description: 'True If code system defines a post-composition grammar.',
		},
		_versionNeeded: {
			type: require('./element.input.js'),
			description:
				'This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system.',
		},
		versionNeeded: {
			type: GraphQLBoolean,
			description:
				'This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system.',
		},
		_content: {
			type: require('./element.input.js'),
			description:
				'How much of the content of the code system - the concepts and codes it defines - are represented in this resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/codesystem-content-mode
		content: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'How much of the content of the code system - the concepts and codes it defines - are represented in this resource.',
		},
		_count: {
			type: require('./element.input.js'),
			description:
				'The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts.',
		},
		count: {
			type: UnsignedIntScalar,
			description:
				'The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts.',
		},
		filter: {
			type: new GraphQLList(require('./codesystemfilter.input.js')),
			description:
				'A filter that can be used in a value set compose statement when selecting concepts using a filter.',
		},
		property: {
			type: new GraphQLList(require('./codesystemproperty.input.js')),
			description:
				'A property defines an additional slot through which additional information can be provided about a concept.',
		},
		concept: {
			type: new GraphQLList(require('./codesystemconcept.input.js')),
			description:
				'Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.',
		},
	}),
});
