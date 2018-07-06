const {
	GraphQLObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Range Fields
 */
let Range = new GraphQLObjectType({
	name: 'Range',
	description: 'A set of ordered Quantities defined by a low and high limit.',
	fields: () => extendSchema(require('./element.schema'), {
		low: {
			type: require('./quantity.schema'),
			description: 'The low limit. The boundary is inclusive.'
		},
		high: {
			type: require('./quantity.schema'),
			description: 'The high limit. The boundary is inclusive.'
		}
	})
});

module.exports = Range;
