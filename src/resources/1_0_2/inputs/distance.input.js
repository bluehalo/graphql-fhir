const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Distance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Distance_Input',
	description: 'A measure of distance.',
	fields: () => extendSchema(require('./quantity.input'))
});
