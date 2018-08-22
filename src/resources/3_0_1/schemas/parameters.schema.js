const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ParametersResourceType = new GraphQLEnumType({
	name: 'ParametersResourceType',
	values: {
		Parameters: { value: 'Parameters' }
	}
});

/**
 * @name exports
 * @summary Parameters Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Parameters',
	description: 'Base StructureDefinition for Parameters Resource.',
	fields: () => extendSchema(require('./resource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ParametersResourceType),
			description: 'Type of this resource'
		},
		parameter: {
			type: new GraphQLList(require('./parametersparameter.schema')),
			description: 'A parameter passed to or received from the operation.'
		}
	})
});
