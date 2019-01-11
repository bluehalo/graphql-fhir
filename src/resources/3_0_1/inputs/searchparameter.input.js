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

/**
 * @name exports
 * @summary SearchParameter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SearchParameter_Input',
	description: 'Base StructureDefinition for SearchParameter Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'SearchParameter_Enum_input',
					values: { SearchParameter: { value: 'SearchParameter' } },
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
				'An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this search parameter. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this search parameter. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the search parameter.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the search parameter.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the search parameter is intended to be used.',
		},
		_purpose: {
			type: require('./element.input.js'),
			description:
				'Explaination of why this search parameter is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explaination of why this search parameter is needed and why it has been designed as it has.',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'The code used in the URL or the parameter name in a parameters resource for this search parameter.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The code used in the URL or the parameter name in a parameters resource for this search parameter.',
		},
		_base: {
			type: require('./element.input.js'),
			description:
				'The base resource type(s) that this search parameter can be used against.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		base: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description:
				'The base resource type(s) that this search parameter can be used against.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'The type of value a search parameter refers to, and how the content is interpreted.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of value a search parameter refers to, and how the content is interpreted.',
		},
		_derivedFrom: {
			type: require('./element.input.js'),
			description:
				'Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.',
		},
		derivedFrom: {
			type: UriScalar,
			description:
				'Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the search parameter from a consumer's perspective. and how it used.",
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"A free text natural language description of the search parameter from a consumer's perspective. and how it used.",
		},
		_expression: {
			type: require('./element.input.js'),
			description:
				'A FHIRPath expression that returns a set of elements for the search parameter.',
		},
		expression: {
			type: GraphQLString,
			description:
				'A FHIRPath expression that returns a set of elements for the search parameter.',
		},
		_xpath: {
			type: require('./element.input.js'),
			description:
				'An XPath expression that returns a set of elements for the search parameter.',
		},
		xpath: {
			type: GraphQLString,
			description:
				'An XPath expression that returns a set of elements for the search parameter.',
		},
		_xpathUsage: {
			type: require('./element.input.js'),
			description:
				'How the search parameter relates to the set of elements returned by evaluating the xpath query.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-xpath-usage
		xpathUsage: {
			type: CodeScalar,
			description:
				'How the search parameter relates to the set of elements returned by evaluating the xpath query.',
		},
		_target: {
			type: require('./element.input.js'),
			description: 'Types of resource (if a resource is referenced).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		target: {
			type: new GraphQLList(CodeScalar),
			description: 'Types of resource (if a resource is referenced).',
		},
		_comparator: {
			type: require('./element.input.js'),
			description: 'Comparators supported for the search parameter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-comparator
		comparator: {
			type: new GraphQLList(CodeScalar),
			description: 'Comparators supported for the search parameter.',
		},
		_modifier: {
			type: require('./element.input.js'),
			description: 'A modifier supported for the search parameter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-modifier-code
		modifier: {
			type: new GraphQLList(CodeScalar),
			description: 'A modifier supported for the search parameter.',
		},
		_chain: {
			type: require('./element.input.js'),
			description:
				'Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.',
		},
		chain: {
			type: new GraphQLList(GraphQLString),
			description:
				'Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.',
		},
		component: {
			type: new GraphQLList(require('./searchparametercomponent.input.js')),
			description: 'Used to define the parts of a composite search parameter.',
		},
	}),
});
