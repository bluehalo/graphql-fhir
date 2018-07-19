const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Range Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Range',
	description: 'Base StructureDefinition for Range Type.',
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
