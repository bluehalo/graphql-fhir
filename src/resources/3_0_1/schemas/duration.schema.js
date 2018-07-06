const {
	GraphQLObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Duration Fields
 */
let Duration = new GraphQLObjectType({
	name: 'Duration',
	description: 'A length of time.',
	fields: () => extendSchema(require('./quantity.schema'))
});

module.exports = Duration;
