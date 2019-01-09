const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary SimpleQuantity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SimpleQuantity',
	description: 'A fixed quantity (no comparator)',
	fields: () => ({}),
});
