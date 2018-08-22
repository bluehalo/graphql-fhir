const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Ratio Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Ratio',
	description: 'Base StructureDefinition for Ratio Type.',
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
