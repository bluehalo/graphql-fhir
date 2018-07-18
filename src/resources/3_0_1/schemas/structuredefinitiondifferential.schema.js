const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary StructureDefinitionDifferential Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinitionDifferential',
	description: 'A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		element: {
			type: new GraphQLList(new GraphQLNonNull(require('./elementdefinition.schema'))),
			description: 'Captures constraints on each element within the resource.'
		}
	})
});
