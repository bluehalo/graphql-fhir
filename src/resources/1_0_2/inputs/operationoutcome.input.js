const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let OperationOutcomeResourceInputType = new GraphQLEnumType({
	name: 'OperationOutcomeResourceInputType',
	values: {
		OperationOutcome: { value: 'OperationOutcome' }
	}
});

/**
 * @name exports
 * @summary OperationOutcome Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationOutcome_Input',
	description: 'Base StructureDefinition for OperationOutcome Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(OperationOutcomeResourceInputType),
			description: 'Type of this resource.'
		},
		issue: {
			type: new GraphQLList(new GraphQLNonNull(require('./operationoutcomeissue.input'))),
			description: 'An error, warning or information message that results from a system action.'
		}
	})
});
