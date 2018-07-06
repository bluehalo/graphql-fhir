const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Ratio Fields
 */
let RatioInput = new GraphQLInputObjectType({
	name: 'RatioInput',
	description: 'A set of ordered Quantities defined by a low and high limit.',
	fields: () => extendSchema(require('./element.input'), {
		numerator: {
			type: require('./quantity.input'),
			description: 'The value of the numerator.'
		},
		denominator: {
			type: require('./quantity.input'),
			description: 'The value of the denominator.'
		}
	})
});

module.exports = RatioInput;
