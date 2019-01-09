const { GraphQLInputObjectType } = require('graphql');

/**
 * @name exports
 * @summary Duration Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Duration_Input',
	description: 'A length of time',
	fields: () => ({}),
});
