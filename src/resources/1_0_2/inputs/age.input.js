const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Age Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Age_Input',
	description: 'A duration (length of time) with a UCUM code.',
	fields: () => extendSchema(require('./quantity.input'))
});
