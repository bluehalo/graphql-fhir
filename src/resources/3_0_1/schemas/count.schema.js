const {
	GraphQLObjectType
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Count Fields
 */
let Count = new GraphQLObjectType({
	name: 'Count',
	description: 'A measured amount (or an amount that can potentially be measured).'
		+ ' Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
	fields: () => extendSchema(require('./quantity.schema'))
});

module.exports = Count;
