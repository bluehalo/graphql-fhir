const { GraphQLInputObjectType } = require('graphql');

/**
 * @name exports
 * @summary SimpleQuantity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SimpleQuantity_Input',
	description: 'A fixed quantity (no comparator)',
	fields: () => ({}),
});
