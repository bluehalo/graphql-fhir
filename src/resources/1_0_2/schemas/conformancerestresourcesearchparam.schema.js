const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Conformance.rest.resource.searchParam Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceRestResourceSearchParam',
	description: 'Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the search parameter used in the interface.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of the search parameter used in the interface.'
		},
		definition: {
			type: UriScalar,
			description: 'An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).'
		},
		_definition: {
			type: require('./element.schema'),
			description: 'An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).'
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
		documentation: {
			type: GraphQLString,
			description: 'This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.'
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
			description: 'Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.'
		},
		_chain: {
			type: require('./element.schema'),
			description: 'Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.'
		}
	})
});
