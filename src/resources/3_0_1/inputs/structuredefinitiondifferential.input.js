const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary StructureDefinition.differential Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureDefinitionDifferential_Input',
	description: 'A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		element: {
			type: new GraphQLList(new GraphQLNonNull(require('./elementdefinition.input'))),
			description: 'Captures constraints on each element within the resource.'
		}
	})
});
