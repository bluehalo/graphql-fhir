const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Parameters Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Parameters',
	description: 'Base StructureDefinition for Parameters Resource.',
	fields: () => extendSchema(require('./resource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		parameter: {
			type: new GraphQLList(require('./parametersparameter.schema')),
			description: 'A parameter passed to or received from the operation.'
		}
	})
});
