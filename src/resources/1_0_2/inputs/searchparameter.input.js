const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let SearchParameterResourceInputType = new GraphQLEnumType({
	name: 'SearchParameterResourceInputType',
	values: {
		SearchParameter: { value: 'SearchParameter' },
	},
});

/**
 * @name exports
 * @summary SearchParameter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SearchParameter_Input',
	description: 'Base StructureDefinition for SearchParameter Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(SearchParameterResourceInputType),
				description: 'Type of this resource.',
			},
			url: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'An absolute URL that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published.',
			},
			_url: {
				type: require('./element.input'),
				description:
					'An absolute URL that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published.',
			},
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'A free text natural language name identifying the search parameter.',
			},
			_name: {
				type: require('./element.input'),
				description:
					'A free text natural language name identifying the search parameter.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
			status: {
				type: CodeScalar,
				description: 'The status of this search parameter definition.',
			},
			_status: {
				type: require('./element.input'),
				description: 'The status of this search parameter definition.',
			},
			experimental: {
				type: GraphQLBoolean,
				description:
					'A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
			},
			_experimental: {
				type: require('./element.input'),
				description:
					'A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
			},
			publisher: {
				type: GraphQLString,
				description:
					'The name of the individual or organization that published the search parameter.',
			},
			_publisher: {
				type: require('./element.input'),
				description:
					'The name of the individual or organization that published the search parameter.',
			},
			contact: {
				type: new GraphQLList(require('./searchparametercontact.input')),
				description:
					'Contacts to assist a user in finding and communicating with the publisher.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.',
			},
			_date: {
				type: require('./element.input'),
				description:
					'The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.',
			},
			requirements: {
				type: GraphQLString,
				description:
					'The Scope and Usage that this search parameter was created to meet.',
			},
			_requirements: {
				type: require('./element.input'),
				description:
					'The Scope and Usage that this search parameter was created to meet.',
			},
			code: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The code used in the URL or the parameter name in a parameters resource for this search parameter.',
			},
			_code: {
				type: require('./element.input'),
				description:
					'The code used in the URL or the parameter name in a parameters resource for this search parameter.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
			base: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The base resource type that this search parameter refers to.',
			},
			_base: {
				type: require('./element.input'),
				description:
					'The base resource type that this search parameter refers to.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The type of value a search parameter refers to, and how the content is interpreted.',
			},
			_type: {
				type: require('./element.input'),
				description:
					'The type of value a search parameter refers to, and how the content is interpreted.',
			},
			description: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'A description of the search parameters and how it used.',
			},
			_description: {
				type: require('./element.input'),
				description: 'A description of the search parameters and how it used.',
			},
			xpath: {
				type: GraphQLString,
				description:
					'An XPath expression that returns a set of elements for the search parameter.',
			},
			_xpath: {
				type: require('./element.input'),
				description:
					'An XPath expression that returns a set of elements for the search parameter.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/search-xpath-usage
			xpathUsage: {
				type: CodeScalar,
				description:
					'How the search parameter relates to the set of elements returned by evaluating the xpath query.',
			},
			_xpathUsage: {
				type: require('./element.input'),
				description:
					'How the search parameter relates to the set of elements returned by evaluating the xpath query.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
			target: {
				type: new GraphQLList(CodeScalar),
				description: 'Types of resource (if a resource is referenced).',
			},
			_target: {
				type: require('./element.input'),
				description: 'Types of resource (if a resource is referenced).',
			},
		}),
});
