const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SimpleQuantity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SimpleQuantity_Input',
	description: 'A fixed quantity (no comparator).',
	fields: () => extendSchema(require('./quantity.input')),
});
