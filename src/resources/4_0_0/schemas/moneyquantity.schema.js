const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary MoneyQuantity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MoneyQuantity',
	description:
		'An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision)',
	fields: () => ({}),
});
