const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Count Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Count',
	description: 'Base StructureDefinition for Count Type.',
	fields: () => extendSchema(require('./quantity.schema')),
});
