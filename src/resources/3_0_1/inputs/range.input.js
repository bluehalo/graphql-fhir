const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Range Fields
 */
let RangeInput = new GraphQLInputObjectType({
	name: 'RangeInput',
	description: 'A set of ordered Quantities defined by a low and high limit.',
	fields: () => extendSchema(require('./element.input'), {
		low: {
			type: require('./quantity.input'),
			description: 'The low limit. The boundary is inclusive.'
		},
		high: {
			type: require('./quantity.input'),
			description: 'The high limit. The boundary is inclusive.'
		}
	})
});

module.exports = RangeInput;
