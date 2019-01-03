const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MessageHeader.source Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeaderSource',
	description: 'The source application from which this message originated.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the source system.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Human-readable name for the source system.'
		},
		software: {
			type: GraphQLString,
			description: 'May include configuration or other information useful in debugging.'
		},
		_software: {
			type: require('./element.schema'),
			description: 'May include configuration or other information useful in debugging.'
		},
		version: {
			type: GraphQLString,
			description: 'Can convey versions of multiple systems in situations where a message passes through multiple hands.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'Can convey versions of multiple systems in situations where a message passes through multiple hands.'
		},
		contact: {
			type: require('./contactpoint.schema'),
			description: 'An e-mail, phone, website or other contact point to use to resolve issues with message communications.'
		},
		endpoint: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Identifies the routing target to send acknowledgements to.'
		},
		_endpoint: {
			type: require('./element.schema'),
			description: 'Identifies the routing target to send acknowledgements to.'
		}
	})
});
