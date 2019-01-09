const { GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary Money Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Money',
	description:
		'An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision)',
	fields: () => ({}),
});
