const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary OperationOutcome Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationOutcome_Input',
	description: 'Base StructureDefinition for OperationOutcome Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		issue: {
			type: new GraphQLList(new GraphQLNonNull(require('./operationoutcomeissue.input'))),
			description: 'An error, warning or information message that results from a system action.'
		}
	})
});
