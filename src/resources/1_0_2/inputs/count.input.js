const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Count Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Count_Input',
	description: 'A count of a discrete element (no unit).',
	fields: () => extendSchema(require('./quantity.input')),
});
