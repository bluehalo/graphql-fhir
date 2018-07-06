const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Distance Fields
 */
let DistanceInput = new GraphQLInputObjectType({
	name: 'DistanceInput',
	description: 'A length - a value with a unit that is a physical distance.',
	fields: () => extendSchema(require('./quantity.input'))
});

module.exports = DistanceInput;
