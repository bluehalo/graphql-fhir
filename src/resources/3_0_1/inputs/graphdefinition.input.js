const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let GraphDefinitionResourceInputType = new GraphQLEnumType({
	name: 'GraphDefinitionResourceInputType',
	values: {
		GraphDefinition: { value: 'GraphDefinition' }
	}
});

/**
 * @name exports
 * @summary GraphDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GraphDefinition_Input',
	description: 'Base StructureDefinition for GraphDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(GraphDefinitionResourceInputType),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this graph definition is (or will be) published. The URL SHOULD include the major version of the graph definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this graph definition is (or will be) published. The URL SHOULD include the major version of the graph definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this graph definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this graph definition. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the graph definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the graph definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the graph definition.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the graph definition.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the graph definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the graph definition from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate graph definition instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A legal or geographic region in which the graph definition is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this graph definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.input'),
			description: 'Explaination of why this graph definition is needed and why it has been designed as it has.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		start: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of FHIR resource at which instances of this graph start.'
		},
		_start: {
			type: require('./element.input'),
			description: 'The type of FHIR resource at which instances of this graph start.'
		},
		profile: {
			type: UriScalar,
			description: 'The profile that describes the use of the base resource.'
		},
		_profile: {
			type: require('./element.input'),
			description: 'The profile that describes the use of the base resource.'
		},
		link: {
			type: new GraphQLList(require('./graphdefinitionlink.input')),
			description: 'Links this graph makes rules about.'
		}
	})
});
