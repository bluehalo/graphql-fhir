const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Duration Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Duration_Input',
	description: 'Base StructureDefinition for Duration Type.',
	fields: () => extendSchema(require('./quantity.input'))
});
