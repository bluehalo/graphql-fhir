const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let LibraryResourceInputType = new GraphQLEnumType({
	name: 'LibraryResourceInputType',
	values: {
		Library: { value: 'Library' }
	}
});

/**
 * @name exports
 * @summary Library Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Library_Input',
	description: 'Base StructureDefinition for Library Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(LibraryResourceInputType),
			description: 'Type of this resource.'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this library when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this library is (or will be) published. The URL SHOULD include the major version of the library. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URI that is used to identify this library when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this library is (or will be) published. The URL SHOULD include the major version of the library. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A formal identifier that is used to identify this library when it is represented in other formats, or referenced in a specification, model, design or an instance. e.g. CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the library when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the library author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the library when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the library author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the library. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A natural language name identifying the library. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the library.'
		},
		_title: {
			type: require('./element.input'),
			description: 'A short, descriptive, user-friendly title for the library.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this library. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this library. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this library is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A boolean value to indicate that this library is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/library-type
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the library was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the library changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the library was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the library changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the library.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the library.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the library from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the library from a consumer\'s perspective.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this library is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.input'),
			description: 'Explaination of why this library is needed and why it has been designed as it has.'
		},
		usage: {
			type: GraphQLString,
			description: 'A detailed description of how the library is used from a clinical perspective.'
		},
		_usage: {
			type: require('./element.input'),
			description: 'A detailed description of how the library is used from a clinical perspective.'
		},
		approvalDate: {
			type: DateScalar,
			description: 'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.'
		},
		_approvalDate: {
			type: require('./element.input'),
			description: 'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.'
		},
		lastReviewDate: {
			type: DateScalar,
			description: 'The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.'
		},
		_lastReviewDate: {
			type: require('./element.input'),
			description: 'The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.'
		},
		effectivePeriod: {
			type: require('./period.input'),
			description: 'The period during which the library content was or is planned to be in active use.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate library instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A legal or geographic region in which the library is intended to be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/definition-topic
		topic: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.'
		},
		contributor: {
			type: new GraphQLList(require('./contributor.input')),
			description: 'A contributor to the content of the library, including authors, editors, reviewers, and endorsers.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.'
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.input')),
			description: 'Related artifacts such as additional documentation, justification, or bibliographic references.'
		},
		parameter: {
			type: new GraphQLList(require('./parameterdefinition.input')),
			description: 'The parameter element defines parameters used by the library.'
		},
		dataRequirement: {
			type: new GraphQLList(require('./datarequirement.input')),
			description: 'Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.'
		},
		content: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.'
		}
	})
});
