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
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary CodeSystem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeSystem',
	description:
		'The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CodeSystem_Enum_schema',
					values: { CodeSystem: { value: 'CodeSystem' } },
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
				'An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this code system is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the code system is stored on different servers. This is used in [Coding](datatypes.html#Coding).system.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this code system is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the code system is stored on different servers. This is used in [Coding](datatypes.html#Coding).system.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding](datatypes.html#Coding).version.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding](datatypes.html#Coding).version.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the code system.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the code system.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The date (and optionally time) when the code system resource was created or revised.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The date (and optionally time) when the code system resource was created or revised.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A Boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the code system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the code system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the organization or individual that published the code system.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the code system.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the code system from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the code system from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate code system instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the code system is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explanation of why this code system is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this code system is needed and why it has been designed as it has.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.',
		},
		_caseSensitive: {
			type: require('./element.schema.js'),
			description:
				'If code comparison is case sensitive when codes within this system are compared to each other.',
		},
		caseSensitive: {
			type: GraphQLBoolean,
			description:
				'If code comparison is case sensitive when codes within this system are compared to each other.',
		},
		_valueSet: {
			type: require('./element.schema.js'),
			description:
				'Canonical reference to the value set that contains the entire code system.',
		},
		valueSet: {
			type: CanonicalScalar,
			description:
				'Canonical reference to the value set that contains the entire code system.',
		},
		_hierarchyMeaning: {
			type: require('./element.schema.js'),
			description:
				'The meaning of the hierarchy of concepts as represented in this resource.',
		},
		hierarchyMeaning: {
			type: CodeScalar,
			description:
				'The meaning of the hierarchy of concepts as represented in this resource.',
		},
		_compositional: {
			type: require('./element.schema.js'),
			description:
				'The code system defines a compositional (post-coordination) grammar.',
		},
		compositional: {
			type: GraphQLBoolean,
			description:
				'The code system defines a compositional (post-coordination) grammar.',
		},
		_versionNeeded: {
			type: require('./element.schema.js'),
			description:
				'This flag is used to signify that the code system does not commit to concept permanence across versions. If true, a version must be specified when referencing this code system.',
		},
		versionNeeded: {
			type: GraphQLBoolean,
			description:
				'This flag is used to signify that the code system does not commit to concept permanence across versions. If true, a version must be specified when referencing this code system.',
		},
		_content: {
			type: require('./element.schema.js'),
			description:
				'The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.',
		},
		content: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.',
		},
		_supplements: {
			type: require('./element.schema.js'),
			description:
				'The canonical URL of the code system that this code system supplement is adding designations and properties to.',
		},
		supplements: {
			type: CanonicalScalar,
			description:
				'The canonical URL of the code system that this code system supplement is adding designations and properties to.',
		},
		_count: {
			type: require('./element.schema.js'),
			description:
				'The total number of concepts defined by the code system. Where the code system has a compositional grammar, the basis of this count is defined by the system steward.',
		},
		count: {
			type: UnsignedIntScalar,
			description:
				'The total number of concepts defined by the code system. Where the code system has a compositional grammar, the basis of this count is defined by the system steward.',
		},
		filter: {
			type: new GraphQLList(require('./codesystemfilter.schema.js')),
			description:
				'A filter that can be used in a value set compose statement when selecting concepts using a filter.',
		},
		property: {
			type: new GraphQLList(require('./codesystemproperty.schema.js')),
			description:
				'A property defines an additional slot through which additional information can be provided about a concept.',
		},
		concept: {
			type: new GraphQLList(require('./codesystemconcept.schema.js')),
			description:
				'Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meanings of the hierarchical relationships are.',
		},
	}),
});
