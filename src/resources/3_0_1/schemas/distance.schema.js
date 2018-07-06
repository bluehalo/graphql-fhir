const {
	GraphQLObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Distance Fields
 */
let Distance = new GraphQLObjectType({
	name: 'Distance',
	description: 'A length - a value with a unit that is a physical distance.',
	fields: () => extendSchema(require('./quantity.schema'))
});

module.exports = Distance;
