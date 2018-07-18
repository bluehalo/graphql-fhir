const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MessageHeaderSource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MessageHeaderSource_Input',
	description: 'The source application from which this message originated.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the source system.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Human-readable name for the source system.'
		},
		software: {
			type: GraphQLString,
			description: 'May include configuration or other information useful in debugging.'
		},
		_software: {
			type: require('./element.input'),
			description: 'May include configuration or other information useful in debugging.'
		},
		version: {
			type: GraphQLString,
			description: 'Can convey versions of multiple systems in situations where a message passes through multiple hands.'
		},
		_version: {
			type: require('./element.input'),
			description: 'Can convey versions of multiple systems in situations where a message passes through multiple hands.'
		},
		contact: {
			type: require('./contactpoint.input'),
			description: 'An e-mail, phone, website or other contact point to use to resolve issues with message communications.'
		},
		endpoint: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Identifies the routing target to send acknowledgements to.'
		},
		_endpoint: {
			type: require('./element.input'),
			description: 'Identifies the routing target to send acknowledgements to.'
		}
	})
});
