const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Duration Fields
 */
let DurationInput = new GraphQLInputObjectType({
	name: 'DurationInput',
	description: 'A length of time.',
	fields: () => extendSchema(require('./quantity.input'))
});

module.exports = DurationInput;
