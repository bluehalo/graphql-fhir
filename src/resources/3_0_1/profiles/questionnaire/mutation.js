// Schemas
const QuestionnaireSchema = require('../../schemas/questionnaire.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const QuestionnaireInput = require('../../inputs/questionnaire.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createQuestionnaire,
	updateQuestionnaire,
	removeQuestionnaire,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Questionnaire',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
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
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Questionnaire record for deletion.',
	},
};

/**
 * @name exports.QuestionnaireCreateMutation
 * @summary QuestionnaireCreate mutation.
 */
module.exports.QuestionnaireCreateMutation = {
	description: 'Create a Questionnaire record',
	resolve: scopeInvariant(scopeOptions, createQuestionnaire),
	type: QuestionnaireSchema,
	args: WriteArgs,
};

/**
 * @name exports.QuestionnaireUpdateMutation
 * @summary QuestionnaireUpdate mutation.
 */
module.exports.QuestionnaireUpdateMutation = {
	description: 'Update a Questionnaire record',
	resolve: scopeInvariant(scopeOptions, updateQuestionnaire),
	type: QuestionnaireSchema,
	args: WriteArgs,
};

/**
 * @name exports.QuestionnaireRemoveMutation
 * @summary QuestionnaireRemove mutation.
 */
module.exports.QuestionnaireRemoveMutation = {
	description: 'Remove a Questionnaire record',
	resolve: scopeInvariant(scopeOptions, removeQuestionnaire),
	type: QuestionnaireSchema,
	args: DeleteArgs,
};
