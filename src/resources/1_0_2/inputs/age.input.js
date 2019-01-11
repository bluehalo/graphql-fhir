const { GraphQLInputObjectType } = require('graphql');

/**
 * @name exports
 * @summary Age Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Age_Input',
	description: 'A duration (length of time) with a UCUM code',
	fields: () => ({}),
});
