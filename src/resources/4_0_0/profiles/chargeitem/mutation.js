// Schemas
const ChargeItemSchema = require('../../schemas/chargeitem.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ChargeItemInput = require('../../inputs/chargeitem.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createChargeItem,
	updateChargeItem,
	removeChargeItem,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ChargeItem',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a ChargeItem record.',
	},
	resource: {
		type: new GraphQLNonNull(ChargeItemInput),
		description: 'ChargeItem Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ChargeItem record for deletion.',
	},
};

/**
 * @name exports.ChargeItemCreateMutation
 * @summary ChargeItemCreate mutation.
 */
module.exports.ChargeItemCreateMutation = {
	description: 'Create a ChargeItem record',
	resolve: scopeInvariant(scopeOptions, createChargeItem),
	type: ChargeItemSchema,
	args: WriteArgs,
};

/**
 * @name exports.ChargeItemUpdateMutation
 * @summary ChargeItemUpdate mutation.
 */
module.exports.ChargeItemUpdateMutation = {
	description: 'Update a ChargeItem record',
	resolve: scopeInvariant(scopeOptions, updateChargeItem),
	type: ChargeItemSchema,
	args: WriteArgs,
};

/**
 * @name exports.ChargeItemRemoveMutation
 * @summary ChargeItemRemove mutation.
 */
module.exports.ChargeItemRemoveMutation = {
	description: 'Remove a ChargeItem record',
	resolve: scopeInvariant(scopeOptions, removeChargeItem),
	type: ChargeItemSchema,
	args: DeleteArgs,
};
