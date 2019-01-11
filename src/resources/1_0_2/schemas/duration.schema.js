const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Duration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Duration',
	description: 'A length of time',
	fields: () => ({}),
});
