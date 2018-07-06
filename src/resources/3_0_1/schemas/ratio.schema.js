const {
	GraphQLObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Ratio Fields
 */
let Ratio = new GraphQLObjectType({
	name: 'Ratio',
	description: 'A set of ordered Quantities defined by a low and high limit.',
	fields: () => extendSchema(require('./element.schema'), {
		numerator: {
			type: require('./quantity.schema'),
			description: 'The value of the numerator.'
		},
		denominator: {
			type: require('./quantity.schema'),
			description: 'The value of the denominator.'
		}
	})
});

module.exports = Ratio;
