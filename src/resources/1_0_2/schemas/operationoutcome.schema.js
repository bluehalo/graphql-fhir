const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let OperationOutcomeResourceType = new GraphQLEnumType({
	name: 'OperationOutcomeResourceType',
	values: {
		OperationOutcome: { value: 'OperationOutcome' }
	}
});

/**
 * @name exports
 * @summary OperationOutcome Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationOutcome',
	description: 'Base StructureDefinition for OperationOutcome Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(OperationOutcomeResourceType),
			description: 'Type of this resource.'
		},
		issue: {
			type: new GraphQLList(new GraphQLNonNull(require('./operationoutcomeissue.schema'))),
			description: 'An error, warning or information message that results from a system action.'
		}
	})
});
