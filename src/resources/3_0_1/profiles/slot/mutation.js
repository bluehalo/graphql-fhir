// Schemas
const SlotSchema = require('../../schemas/slot.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SlotInput = require('../../inputs/slot.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createSlot, updateSlot, removeSlot } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Slot',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Slot record.',
	},
	resource: {
		type: new GraphQLNonNull(SlotInput),
		description: 'Slot Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Slot record for deletion.',
	},
};

/**
 * @name exports.SlotCreateMutation
 * @summary SlotCreate mutation.
 */
module.exports.SlotCreateMutation = {
	description: 'Create a Slot record',
	resolve: scopeInvariant(scopeOptions, createSlot),
	type: SlotSchema,
	args: WriteArgs,
};

/**
 * @name exports.SlotUpdateMutation
 * @summary SlotUpdate mutation.
 */
module.exports.SlotUpdateMutation = {
	description: 'Update a Slot record',
	resolve: scopeInvariant(scopeOptions, updateSlot),
	type: SlotSchema,
	args: WriteArgs,
};

/**
 * @name exports.SlotRemoveMutation
 * @summary SlotRemove mutation.
 */
module.exports.SlotRemoveMutation = {
	description: 'Remove a Slot record',
	resolve: scopeInvariant(scopeOptions, removeSlot),
	type: SlotSchema,
	args: DeleteArgs,
};
