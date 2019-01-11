// Schemas
const ChargeItemDefinitionSchema = require('../../schemas/chargeitemdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ChargeItemDefinitionInput = require('../../inputs/chargeitemdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createChargeItemDefinition,
	updateChargeItemDefinition,
	removeChargeItemDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ChargeItemDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ChargeItemDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(ChargeItemDefinitionInput),
		description: 'ChargeItemDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ChargeItemDefinition record for deletion.',
	},
};

/**
 * @name exports.ChargeItemDefinitionCreateMutation
 * @summary ChargeItemDefinitionCreate mutation.
 */
module.exports.ChargeItemDefinitionCreateMutation = {
	description: 'Create a ChargeItemDefinition record',
	resolve: scopeInvariant(scopeOptions, createChargeItemDefinition),
	type: ChargeItemDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ChargeItemDefinitionUpdateMutation
 * @summary ChargeItemDefinitionUpdate mutation.
 */
module.exports.ChargeItemDefinitionUpdateMutation = {
	description: 'Update a ChargeItemDefinition record',
	resolve: scopeInvariant(scopeOptions, updateChargeItemDefinition),
	type: ChargeItemDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ChargeItemDefinitionRemoveMutation
 * @summary ChargeItemDefinitionRemove mutation.
 */
module.exports.ChargeItemDefinitionRemoveMutation = {
	description: 'Remove a ChargeItemDefinition record',
	resolve: scopeInvariant(scopeOptions, removeChargeItemDefinition),
	type: ChargeItemDefinitionSchema,
	args: DeleteArgs,
};
