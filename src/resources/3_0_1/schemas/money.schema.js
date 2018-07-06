const {
	GraphQLObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Money Fields
 */
let Money = new GraphQLObjectType({
	name: 'Money',
	description: 'An amount of economic utility in some recognized currency.',
	fields: () => extendSchema(require('./quantity.schema'))
});

module.exports = Money;
