const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary OperationOutcome Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationOutcome',
	description: 'Base StructureDefinition for OperationOutcome Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		issue: {
			type: new GraphQLList(new GraphQLNonNull(require('./operationoutcomeissue.schema'))),
			description: 'An error, warning or information message that results from a system action.'
		}
	})
});
