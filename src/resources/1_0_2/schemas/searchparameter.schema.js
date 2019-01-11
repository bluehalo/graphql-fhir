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
 * @summary SearchParameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SearchParameter',
	description: 'Base StructureDefinition for SearchParameter Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'SearchParameter_Enum_schema',
					values: { SearchParameter: { value: 'SearchParameter' } },
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
				'An absolute URL that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URL that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A free text natural language name identifying the search parameter.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A free text natural language name identifying the search parameter.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of this search parameter definition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: CodeScalar,
			description: 'The status of this search parameter definition.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization that published the search parameter.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the search parameter.',
		},
		contact: {
			type: new GraphQLList(require('./searchparametercontact.schema.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.',
		},
		_requirements: {
			type: require('./element.schema.js'),
			description:
				'The Scope and Usage that this search parameter was created to meet.',
		},
		requirements: {
			type: GraphQLString,
			description:
				'The Scope and Usage that this search parameter was created to meet.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'The code used in the URL or the parameter name in a parameters resource for this search parameter.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The code used in the URL or the parameter name in a parameters resource for this search parameter.',
		},
		_base: {
			type: require('./element.schema.js'),
			description:
				'The base resource type that this search parameter refers to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		base: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The base resource type that this search parameter refers to.',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'The type of value a search parameter refers to, and how the content is interpreted.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of value a search parameter refers to, and how the content is interpreted.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'A description of the search parameters and how it used.',
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A description of the search parameters and how it used.',
		},
		_xpath: {
			type: require('./element.schema.js'),
			description:
				'An XPath expression that returns a set of elements for the search parameter.',
		},
		xpath: {
			type: GraphQLString,
			description:
				'An XPath expression that returns a set of elements for the search parameter.',
		},
		_xpathUsage: {
			type: require('./element.schema.js'),
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
			type: require('./element.schema.js'),
			description: 'Types of resource (if a resource is referenced).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		target: {
			type: new GraphQLList(CodeScalar),
			description: 'Types of resource (if a resource is referenced).',
		},
	}),
});
