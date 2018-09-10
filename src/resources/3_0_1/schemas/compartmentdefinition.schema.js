const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let CompartmentDefinitionResourceType = new GraphQLEnumType({
	name: 'CompartmentDefinitionResourceType',
	values: {
		CompartmentDefinition: { value: 'CompartmentDefinition' }
	}
});

/**
 * @name exports
 * @summary CompartmentDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompartmentDefinition',
	description: 'Base StructureDefinition for CompartmentDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CompartmentDefinitionResourceType),
			description: 'Type of this resource.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that is used to identify this compartment definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this compartment definition is (or will be) published. The URL SHOULD include the major version of the compartment definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this compartment definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this compartment definition is (or will be) published. The URL SHOULD include the major version of the compartment definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the compartment definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the compartment definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the compartment definition.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive, user-friendly title for the compartment definition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this compartment definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this compartment definition. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this compartment definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this compartment definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the compartment definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the compartment definition changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the compartment definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the compartment definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the compartment definition.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the compartment definition.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the compartment definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the compartment definition from a consumer\'s perspective.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this compartment definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this compartment definition is needed and why it has been designed as it has.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate compartment definition instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the compartment definition is intended to be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/compartment-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Which compartment this definition describes.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Which compartment this definition describes.'
		},
		search: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Whether the search syntax is supported,.'
		},
		_search: {
			type: require('./element.schema'),
			description: 'Whether the search syntax is supported,.'
		},
		resource: {
			type: new GraphQLList(require('./compartmentdefinitionresource.schema')),
			description: 'Information about how a resource is related to the compartment.'
		}
	})
});
