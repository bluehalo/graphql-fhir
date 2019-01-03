const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let SearchParameterResourceType = new GraphQLEnumType({
	name: 'SearchParameterResourceType',
	values: {
		SearchParameter: { value: 'SearchParameter' }
	}
});

/**
 * @name exports
 * @summary SearchParameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SearchParameter',
	description: 'Base StructureDefinition for SearchParameter Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SearchParameterResourceType),
			description: 'Type of this resource.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this search parameter. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this search parameter. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the search parameter.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the search parameter.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the search parameter is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this search parameter is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this search parameter is needed and why it has been designed as it has.'
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The code used in the URL or the parameter name in a parameters resource for this search parameter.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'The code used in the URL or the parameter name in a parameters resource for this search parameter.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		base: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'The base resource type(s) that this search parameter can be used against.'
		},
		_base: {
			type: require('./element.schema'),
			description: 'The base resource type(s) that this search parameter can be used against.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of value a search parameter refers to, and how the content is interpreted.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of value a search parameter refers to, and how the content is interpreted.'
		},
		derivedFrom: {
			type: UriScalar,
			description: 'Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.'
		},
		_derivedFrom: {
			type: require('./element.schema'),
			description: 'Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.'
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A free text natural language description of the search parameter from a consumer\'s perspective. and how it used.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the search parameter from a consumer\'s perspective. and how it used.'
		},
		expression: {
			type: GraphQLString,
			description: 'A FHIRPath expression that returns a set of elements for the search parameter.'
		},
		_expression: {
			type: require('./element.schema'),
			description: 'A FHIRPath expression that returns a set of elements for the search parameter.'
		},
		xpath: {
			type: GraphQLString,
			description: 'An XPath expression that returns a set of elements for the search parameter.'
		},
		_xpath: {
			type: require('./element.schema'),
			description: 'An XPath expression that returns a set of elements for the search parameter.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-xpath-usage
		xpathUsage: {
			type: CodeScalar,
			description: 'How the search parameter relates to the set of elements returned by evaluating the xpath query.'
		},
		_xpathUsage: {
			type: require('./element.schema'),
			description: 'How the search parameter relates to the set of elements returned by evaluating the xpath query.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		target: {
			type: new GraphQLList(CodeScalar),
			description: 'Types of resource (if a resource is referenced).'
		},
		_target: {
			type: require('./element.schema'),
			description: 'Types of resource (if a resource is referenced).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-comparator
		comparator: {
			type: new GraphQLList(CodeScalar),
			description: 'Comparators supported for the search parameter.'
		},
		_comparator: {
			type: require('./element.schema'),
			description: 'Comparators supported for the search parameter.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-modifier-code
		modifier: {
			type: new GraphQLList(CodeScalar),
			description: 'A modifier supported for the search parameter.'
		},
		_modifier: {
			type: require('./element.schema'),
			description: 'A modifier supported for the search parameter.'
		},
		chain: {
			type: new GraphQLList(GraphQLString),
			description: 'Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.'
		},
		_chain: {
			type: require('./element.schema'),
			description: 'Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.'
		},
		component: {
			type: new GraphQLList(require('./searchparametercomponent.schema')),
			description: 'Used to define the parts of a composite search parameter.'
		}
	})
});
