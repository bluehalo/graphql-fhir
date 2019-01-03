const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Age Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Age_Input',
	description: 'Base StructureDefinition for Age Type.',
	fields: () => extendSchema(require('./quantity.input'))
});
