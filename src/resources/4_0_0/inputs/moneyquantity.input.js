const { GraphQLInputObjectType } = require('graphql');

/**
 * @name exports
 * @summary MoneyQuantity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MoneyQuantity_Input',
	description:
		'An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision)',
	fields: () => ({}),
});
