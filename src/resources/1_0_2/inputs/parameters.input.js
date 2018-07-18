const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Parameters Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Parameters_Input',
	description: 'Base StructureDefinition for Parameters Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		parameter: {
			type: new GraphQLList(require('./parametersparameter.input')),
			description: 'A parameter passed to or received from the operation.'
		}
	})
});
