const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Age Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Age',
	description: 'A duration (length of time) with a UCUM code.',
	fields: () => extendSchema(require('./quantity.schema'))
});
