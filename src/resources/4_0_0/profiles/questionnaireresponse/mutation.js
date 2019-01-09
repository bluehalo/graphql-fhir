// Schemas
const QuestionnaireResponseSchema = require('../../schemas/questionnaireresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const QuestionnaireResponseInput = require('../../inputs/questionnaireresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createQuestionnaireResponse,
	updateQuestionnaireResponse,
	removeQuestionnaireResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'QuestionnaireResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a QuestionnaireResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(QuestionnaireResponseInput),
		description: 'QuestionnaireResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a QuestionnaireResponse record for deletion.',
	},
};

/**
 * @name exports.QuestionnaireResponseCreateMutation
 * @summary QuestionnaireResponseCreate mutation.
 */
module.exports.QuestionnaireResponseCreateMutation = {
	description: 'Create a QuestionnaireResponse record',
	resolve: scopeInvariant(scopeOptions, createQuestionnaireResponse),
	type: QuestionnaireResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.QuestionnaireResponseUpdateMutation
 * @summary QuestionnaireResponseUpdate mutation.
 */
module.exports.QuestionnaireResponseUpdateMutation = {
	description: 'Update a QuestionnaireResponse record',
	resolve: scopeInvariant(scopeOptions, updateQuestionnaireResponse),
	type: QuestionnaireResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.QuestionnaireResponseRemoveMutation
 * @summary QuestionnaireResponseRemove mutation.
 */
module.exports.QuestionnaireResponseRemoveMutation = {
	description: 'Remove a QuestionnaireResponse record',
	resolve: scopeInvariant(scopeOptions, removeQuestionnaireResponse),
	type: QuestionnaireResponseSchema,
	args: DeleteArgs,
};
