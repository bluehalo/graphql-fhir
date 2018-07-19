const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureDefinitionSnapshot Input Schema
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
