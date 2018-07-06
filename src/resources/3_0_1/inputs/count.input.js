const {
	GraphQLInputObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Count Fields
 */
let CountInput = new GraphQLInputObjectType({
	name: 'CountInput',
	description: 'A measured amount (or an amount that can potentially be measured).'
		+ ' Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
	fields: () => extendSchema(require('./quantity.input'))
});

module.exports = CountInput;
