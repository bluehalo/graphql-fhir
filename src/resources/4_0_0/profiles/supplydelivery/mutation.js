// Schemas
const SupplyDeliverySchema = require('../../schemas/supplydelivery.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SupplyDeliveryInput = require('../../inputs/supplydelivery.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSupplyDelivery,
	updateSupplyDelivery,
	removeSupplyDelivery,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SupplyDelivery',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a SupplyDelivery record.',
	},
	resource: {
		type: new GraphQLNonNull(SupplyDeliveryInput),
		description: 'SupplyDelivery Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a SupplyDelivery record for deletion.',
	},
};

/**
 * @name exports.SupplyDeliveryCreateMutation
 * @summary SupplyDeliveryCreate mutation.
 */
module.exports.SupplyDeliveryCreateMutation = {
	description: 'Create a SupplyDelivery record',
	resolve: scopeInvariant(scopeOptions, createSupplyDelivery),
	type: SupplyDeliverySchema,
	args: WriteArgs,
};

/**
 * @name exports.SupplyDeliveryUpdateMutation
 * @summary SupplyDeliveryUpdate mutation.
 */
module.exports.SupplyDeliveryUpdateMutation = {
	description: 'Update a SupplyDelivery record',
	resolve: scopeInvariant(scopeOptions, updateSupplyDelivery),
	type: SupplyDeliverySchema,
	args: WriteArgs,
};

/**
 * @name exports.SupplyDeliveryRemoveMutation
 * @summary SupplyDeliveryRemove mutation.
 */
module.exports.SupplyDeliveryRemoveMutation = {
	description: 'Remove a SupplyDelivery record',
	resolve: scopeInvariant(scopeOptions, removeSupplyDelivery),
	type: SupplyDeliverySchema,
	args: DeleteArgs,
};
