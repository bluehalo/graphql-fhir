const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Age Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Age_Input',
	description: 'Base StructureDefinition for Age Type.',
	fields: () => extendSchema(require('./quantity.input'))
});
