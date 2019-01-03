const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ServiceDefinitionResourceInputType = new GraphQLEnumType({
	name: 'ServiceDefinitionResourceInputType',
	values: {
		ServiceDefinition: { value: 'ServiceDefinition' }
	}
});

/**
 * @name exports
 * @summary ServiceDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ServiceDefinition_Input',
	description: 'Base StructureDefinition for ServiceDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ServiceDefinitionResourceInputType),
			description: 'Type of this resource.'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this service definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this service definition is (or will be) published. The URL SHOULD include the major version of the service definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URI that is used to identify this service definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this service definition is (or will be) published. The URL SHOULD include the major version of the service definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A formal identifier that is used to identify this service definition when it is represented in other formats, or referenced in a specification, model, design or an instance. This is used for CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the service definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the service definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the service definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the service definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the service definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A natural language name identifying the service definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the service definition.'
		},
		_title: {
			type: require('./element.input'),
			description: 'A short, descriptive, user-friendly title for the service definition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this service definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this service definition. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this service definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A boolean value to indicate that this service definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the service definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the service definition changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the service definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the service definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the service definition.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the service definition.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the service definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the service definition from a consumer\'s perspective.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this service definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.input'),
			description: 'Explaination of why this service definition is needed and why it has been designed as it has.'
		},
		usage: {
			type: GraphQLString,
			description: 'A detailed description of how the module is used from a clinical perspective.'
		},
		_usage: {
			type: require('./element.input'),
			description: 'A detailed description of how the module is used from a clinical perspective.'
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
			description: 'The period during which the service definition content was or is planned to be in active use.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate service definition instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A legal or geographic region in which the service definition is intended to be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/definition-topic
		topic: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.'
		},
		contributor: {
			type: new GraphQLList(require('./contributor.input')),
			description: 'A contributor to the content of the module, including authors, editors, reviewers, and endorsers.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the service definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the service definition.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the service definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the service definition.'
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.input')),
			description: 'Related resources such as additional documentation, justification, or bibliographic references.'
		},
		trigger: {
			type: new GraphQLList(require('./triggerdefinition.input')),
			description: 'The trigger element defines when the rule should be invoked. This information is used by consumers of the rule to determine how to integrate the rule into a specific workflow.'
		},
		dataRequirement: {
			type: new GraphQLList(require('./datarequirement.input')),
			description: 'Data requirements are a machine processable description of the data required by the module in order to perform a successful evaluation.'
		},
		operationDefinition: {
			type: require('./reference.input'),
			description: 'A reference to the operation that is used to invoke this service.'
		}
	})
});
