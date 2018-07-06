const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Age Fields
 */
let AgeInput = new GraphQLInputObjectType({
	name: 'AgeInput',
	description: 'A time period defined by a start and end date and optionally time.',
	fields: () => extendSchema(require('./quantity.input'))
});

module.exports = AgeInput;
