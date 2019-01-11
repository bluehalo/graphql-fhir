const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Age Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Age',
	description: 'A duration (length of time) with a UCUM code',
	fields: () => ({}),
});
