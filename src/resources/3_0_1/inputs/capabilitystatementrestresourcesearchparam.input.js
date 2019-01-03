const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary CapabilityStatement.rest.resource.searchParam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementRestResourceSearchParam_Input',
	description: 'Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the search parameter used in the interface.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of the search parameter used in the interface.'
		},
		definition: {
			type: UriScalar,
			description: 'An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url]()).'
		},
		_definition: {
			type: require('./element.input'),
			description: 'An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url]()).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of value a search parameter refers to, and how the content is interpreted.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of value a search parameter refers to, and how the content is interpreted.'
		},
		documentation: {
			type: GraphQLString,
			description: 'This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.'
		}
	})
});
