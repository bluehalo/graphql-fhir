const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProcessRequest.item Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessRequestItem',
	description: 'List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequenceLinkId: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'A service line number.'
		},
		_sequenceLinkId: {
			type: require('./element.schema'),
			description: 'A service line number.'
		}
	})
});
