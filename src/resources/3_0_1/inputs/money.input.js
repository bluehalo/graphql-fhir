const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Money Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Money_Input',
	description: 'Base StructureDefinition for Money Type.',
	fields: () => extendSchema(require('./quantity.input'))
});
