const { GraphQLInputObjectType } = require('graphql');

/**
 * @name exports
 * @summary Count Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Count_Input',
	description: 'A count of a discrete element (no unit)',
	fields: () => ({}),
});
