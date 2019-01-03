// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const QuestionnaireSchema = require('../../schemas/questionnaire.schema');

// Inputs
const QuestionnaireInput = require('../../inputs/questionnaire.input');

// Resolvers
const {
	questionnaireCreateResolver,
	questionnaireUpdateResolver,
	questionnaireDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Questionnaire',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a Questionnaire record.',
	},
	resource: {
		type: new GraphQLNonNull(QuestionnaireInput),
		description: 'Questionnaire Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Questionnaire record for deletion.',
	},
};

/**
 * @name exports.QuestionnaireCreateMutation
 * @summary QuestionnaireCreate Mutation.
 */
module.exports.QuestionnaireCreateMutation = {
	args: WriteArgs,
	description: 'Create a Questionnaire',
	resolve: scopeInvariant(scopeOptions, questionnaireCreateResolver),
	type: QuestionnaireSchema,
};

/**
 * @name exports.QuestionnaireUpdateMutation
 * @summary QuestionnaireUpdate Mutation.
 */
module.exports.QuestionnaireUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Questionnaires',
	resolve: scopeInvariant(scopeOptions, questionnaireUpdateResolver),
	type: QuestionnaireSchema,
};

/**
 * @name exports.QuestionnaireDeleteMutation
 * @summary QuestionnaireDelete Mutation.
 */
module.exports.QuestionnaireDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Questionnaire',
	resolve: scopeInvariant(scopeOptions, questionnaireDeleteResolver),
	type: QuestionnaireSchema,
};
