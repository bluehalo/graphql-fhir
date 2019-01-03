const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Money Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Money',
	description: 'Base StructureDefinition for Money Type.',
	fields: () => extendSchema(require('./quantity.schema')),
});
