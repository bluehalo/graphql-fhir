const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Count Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Count_Input',
	description: 'Base StructureDefinition for Count Type.',
	fields: () => extendSchema(require('./quantity.input'))
});
