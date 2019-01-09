const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Count Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Count',
	description: 'A count of a discrete element (no unit)',
	fields: () => ({}),
});
