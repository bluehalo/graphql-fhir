const { GraphQLInputObjectType } = require('graphql');

/**
 * @name exports
 * @summary Distance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Distance_Input',
	description: 'A measure of distance',
	fields: () => ({}),
});
