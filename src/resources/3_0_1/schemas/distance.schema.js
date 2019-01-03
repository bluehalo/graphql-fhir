const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Distance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Distance',
	description: 'Base StructureDefinition for Distance Type.',
	fields: () => extendSchema(require('./quantity.schema')),
});
