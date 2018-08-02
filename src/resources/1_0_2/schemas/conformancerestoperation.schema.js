const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConformanceRestOperation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceRestOperation',
	description: 'Definition of an operation or a named query and with its parameters and their meaning and type.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of a query, which is used in the _query parameter when the query is called.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of a query, which is used in the _query parameter when the query is called.'
		},
		definition: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Where the formal definition can be found.'
		}
	})
});
