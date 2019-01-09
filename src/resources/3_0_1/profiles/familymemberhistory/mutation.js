// Schemas
const FamilyMemberHistorySchema = require('../../schemas/familymemberhistory.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const FamilyMemberHistoryInput = require('../../inputs/familymemberhistory.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createFamilyMemberHistory,
	updateFamilyMemberHistory,
	removeFamilyMemberHistory,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'FamilyMemberHistory',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a FamilyMemberHistory record.',
	},
	resource: {
		type: new GraphQLNonNull(FamilyMemberHistoryInput),
		description: 'FamilyMemberHistory Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a FamilyMemberHistory record for deletion.',
	},
};

/**
 * @name exports.FamilyMemberHistoryCreateMutation
 * @summary FamilyMemberHistoryCreate mutation.
 */
module.exports.FamilyMemberHistoryCreateMutation = {
	description: 'Create a FamilyMemberHistory record',
	resolve: scopeInvariant(scopeOptions, createFamilyMemberHistory),
	type: FamilyMemberHistorySchema,
	args: WriteArgs,
};

/**
 * @name exports.FamilyMemberHistoryUpdateMutation
 * @summary FamilyMemberHistoryUpdate mutation.
 */
module.exports.FamilyMemberHistoryUpdateMutation = {
	description: 'Update a FamilyMemberHistory record',
	resolve: scopeInvariant(scopeOptions, updateFamilyMemberHistory),
	type: FamilyMemberHistorySchema,
	args: WriteArgs,
};

/**
 * @name exports.FamilyMemberHistoryRemoveMutation
 * @summary FamilyMemberHistoryRemove mutation.
 */
module.exports.FamilyMemberHistoryRemoveMutation = {
	description: 'Remove a FamilyMemberHistory record',
	resolve: scopeInvariant(scopeOptions, removeFamilyMemberHistory),
	type: FamilyMemberHistorySchema,
	args: DeleteArgs,
};
