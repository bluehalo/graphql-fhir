const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CapabilityStatementRestOperation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementRestOperation',
	description: 'Definition of an operation or a named query together with its parameters and their meaning and type.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called.'
		},
		definition: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Where the formal definition can be found.'
		}
	})
});
