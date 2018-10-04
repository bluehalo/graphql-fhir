const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let ParametersResourceInputType = new GraphQLEnumType({
	name: 'ParametersResourceInputType',
	values: {
		Parameters: { value: 'Parameters' }
	}
});

/**
 * @name exports
 * @summary Parameters Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Parameters_Input',
	description: 'Base StructureDefinition for Parameters Resource.',
	fields: () => extendSchema(require('./resource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ParametersResourceInputType),
			description: 'Type of this resource.'
		},
		parameter: {
			type: new GraphQLList(require('./parametersparameter.input')),
			description: 'A parameter passed to or received from the operation.'
		}
	})
});
