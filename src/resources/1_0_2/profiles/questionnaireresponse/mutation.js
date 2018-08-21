// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const QuestionnaireResponseSchema = require('../../schemas/questionnaireresponse.schema');

// Inputs
const QuestionnaireResponseInput = require('../../inputs/questionnaireresponse.input');

// Resolvers
const {
	questionnaireresponseCreateResolver,
	questionnaireresponseUpdateResolver,
	questionnaireresponseDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'QuestionnaireResponse',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a QuestionnaireResponse record.'
	},
	resource: {
		type: new GraphQLNonNull(QuestionnaireResponseInput),
		description: 'QuestionnaireResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a QuestionnaireResponse record for deletion.'
	}
};

/**
 * @name exports.QuestionnaireResponseCreateMutation
 * @summary QuestionnaireResponseCreate Mutation.
 */
module.exports.QuestionnaireResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, questionnaireresponseCreateResolver),
	type: QuestionnaireResponseSchema
};

/**
 * @name exports.QuestionnaireResponseUpdateMutation
 * @summary QuestionnaireResponseUpdate Mutation.
 */
module.exports.QuestionnaireResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple QuestionnaireResponses',
	resolve: scopeInvariant(scopeOptions, questionnaireresponseUpdateResolver),
	type: QuestionnaireResponseSchema
};

/**
 * @name exports.QuestionnaireResponseDeleteMutation
 * @summary QuestionnaireResponseDelete Mutation.
 */
module.exports.QuestionnaireResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, questionnaireresponseDeleteResolver),
	type: QuestionnaireResponseSchema
};
