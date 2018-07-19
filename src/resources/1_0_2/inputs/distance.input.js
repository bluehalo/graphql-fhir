const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Distance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Distance_Input',
	description: 'A measure of distance.',
	fields: () => extendSchema(require('./quantity.input'))
});
