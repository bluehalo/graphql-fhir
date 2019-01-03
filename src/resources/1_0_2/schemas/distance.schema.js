const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Distance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Distance',
	description: 'A measure of distance.',
	fields: () => extendSchema(require('./quantity.schema')),
});
