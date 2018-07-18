const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CodeSystem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystem_Input',
	description: 'Base StructureDefinition for CodeSystem Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this code system is (or will be) published. The URL SHOULD include the major version of the code system. For more information see [Technical and Business Versions](resource.html#versions). This is used in [Coding]{datatypes.html#Coding}.system.'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this code system is (or will be) published. The URL SHOULD include the major version of the code system. For more information see [Technical and Business Versions](resource.html#versions). This is used in [Coding]{datatypes.html#Coding}.system.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding]{datatypes.html#Coding}.version.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding]{datatypes.html#Coding}.version.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the code system.'
		},
		_title: {
			type: require('./element.input'),
			description: 'A short, descriptive, user-friendly title for the code system.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this code system. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this code system. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the code system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the code system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the code system.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the code system.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the code system from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the code system from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate code system instances.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A legal or geographic region in which the code system is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this code system is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.input'),
			description: 'Explaination of why this code system is needed and why it has been designed as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.'
		},
		caseSensitive: {
			type: GraphQLBoolean,
			description: 'If code comparison is case sensitive when codes within this system are compared to each other.'
		},
		_caseSensitive: {
			type: require('./element.input'),
			description: 'If code comparison is case sensitive when codes within this system are compared to each other.'
		},
		valueSet: {
			type: UriScalar,
			description: 'Canonical URL of value set that contains the entire code system.'
		},
		_valueSet: {
			type: require('./element.input'),
			description: 'Canonical URL of value set that contains the entire code system.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning
		hierarchyMeaning: {
			type: CodeScalar,
			description: 'The meaning of the hierarchy of concepts.'
		},
		_hierarchyMeaning: {
			type: require('./element.input'),
			description: 'The meaning of the hierarchy of concepts.'
		},
		compositional: {
			type: GraphQLBoolean,
			description: 'True If code system defines a post-composition grammar.'
		},
		_compositional: {
			type: require('./element.input'),
			description: 'True If code system defines a post-composition grammar.'
		},
		versionNeeded: {
			type: GraphQLBoolean,
			description: 'This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system.'
		},
		_versionNeeded: {
			type: require('./element.input'),
			description: 'This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/codesystem-content-mode
		content: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How much of the content of the code system - the concepts and codes it defines - are represented in this resource.'
		},
		_content: {
			type: require('./element.input'),
			description: 'How much of the content of the code system - the concepts and codes it defines - are represented in this resource.'
		},
		count: {
			type: UnsignedIntScalar,
			description: 'The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts.'
		},
		_count: {
			type: require('./element.input'),
			description: 'The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts.'
		},
		filter: {
			type: new GraphQLList(require('./codesystemfilter.input')),
			description: 'A filter that can be used in a value set compose statement when selecting concepts using a filter.'
		},
		property: {
			type: new GraphQLList(require('./codesystemproperty.input')),
			description: 'A property defines an additional slot through which additional information can be provided about a concept.'
		},
		concept: {
			type: new GraphQLList(require('./codesystemconcept.input')),
			description: 'Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.'
		}
	})
});
