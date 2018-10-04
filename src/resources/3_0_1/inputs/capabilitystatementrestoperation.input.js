const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CapabilityStatement.rest.operation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementRestOperation_Input',
	description: 'Definition of an operation or a named query together with its parameters and their meaning and type.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called.'
		},
		definition: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Where the formal definition can be found.'
		}
	})
});
