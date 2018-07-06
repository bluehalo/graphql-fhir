const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Money Fields
 */
let MoneyInput = new GraphQLInputObjectType({
	name: 'MoneyInput',
	description: 'An amount of economic utility in some recognized currency.',
	fields: () => extendSchema(require('./quantity.input'))
});

module.exports = MoneyInput;
