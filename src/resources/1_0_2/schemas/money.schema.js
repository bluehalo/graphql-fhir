const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Money Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Money',
	description: 'An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision).',
	fields: () => extendSchema({

	})
});
