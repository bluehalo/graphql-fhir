const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Duration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Duration',
	description: 'Base StructureDefinition for Duration Type.',
	fields: () => extendSchema(require('./quantity.schema'))
});
