const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SimpleQuantity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SimpleQuantity_Input',
	description: 'A fixed quantity (no comparator).',
	fields: () => extendSchema(require('./quantity.input'))
});
