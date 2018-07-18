const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Count Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Count',
	description: 'A count of a discrete element (no unit).',
	fields: () => extendSchema({

	})
});
