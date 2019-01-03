const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary StructureDefinition.snapshot Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureDefinitionSnapshot_Input',
	description: 'A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		element: {
			type: new GraphQLList(new GraphQLNonNull(require('./elementdefinition.input'))),
			description: 'Captures constraints on each element within the resource.'
		}
	})
});
