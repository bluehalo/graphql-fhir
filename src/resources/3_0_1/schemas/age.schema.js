const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Age Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Age',
	description: 'Base StructureDefinition for Age Type.',
	fields: () => extendSchema(require('./quantity.schema'))
});
