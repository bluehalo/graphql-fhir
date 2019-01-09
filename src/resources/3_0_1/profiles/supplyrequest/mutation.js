// Schemas
const SupplyRequestSchema = require('../../schemas/supplyrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SupplyRequestInput = require('../../inputs/supplyrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSupplyRequest,
	updateSupplyRequest,
	removeSupplyRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SupplyRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a SupplyRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(SupplyRequestInput),
		description: 'SupplyRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a SupplyRequest record for deletion.',
	},
};

/**
 * @name exports.SupplyRequestCreateMutation
 * @summary SupplyRequestCreate mutation.
 */
module.exports.SupplyRequestCreateMutation = {
	description: 'Create a SupplyRequest record',
	resolve: scopeInvariant(scopeOptions, createSupplyRequest),
	type: SupplyRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.SupplyRequestUpdateMutation
 * @summary SupplyRequestUpdate mutation.
 */
module.exports.SupplyRequestUpdateMutation = {
	description: 'Update a SupplyRequest record',
	resolve: scopeInvariant(scopeOptions, updateSupplyRequest),
	type: SupplyRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.SupplyRequestRemoveMutation
 * @summary SupplyRequestRemove mutation.
 */
module.exports.SupplyRequestRemoveMutation = {
	description: 'Remove a SupplyRequest record',
	resolve: scopeInvariant(scopeOptions, removeSupplyRequest),
	type: SupplyRequestSchema,
	args: DeleteArgs,
};
