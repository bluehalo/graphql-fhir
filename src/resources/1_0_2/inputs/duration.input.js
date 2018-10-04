const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Duration Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Duration_Input',
	description: 'A length of time.',
	fields: () => extendSchema(require('./quantity.input'))
});
