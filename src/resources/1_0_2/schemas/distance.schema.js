const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Distance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Distance',
	description: 'A measure of distance',
	fields: () => ({}),
});
