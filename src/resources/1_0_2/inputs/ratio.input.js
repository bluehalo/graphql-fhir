const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Ratio Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Ratio_Input',
	description: 'Base StructureDefinition for Ratio Type.',
	fields: () => extendSchema({
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
