const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Money Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Money_Input',
	description: 'An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision).',
	fields: () => extendSchema(require('./quantity.input'))
});
