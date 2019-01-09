// Schemas
const ContractSchema = require('../../schemas/contract.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ContractInput = require('../../inputs/contract.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createContract,
	updateContract,
	removeContract,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Contract',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Contract record.',
	},
	resource: {
		type: new GraphQLNonNull(ContractInput),
		description: 'Contract Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Contract record for deletion.',
	},
};

/**
 * @name exports.ContractCreateMutation
 * @summary ContractCreate mutation.
 */
module.exports.ContractCreateMutation = {
	description: 'Create a Contract record',
	resolve: scopeInvariant(scopeOptions, createContract),
	type: ContractSchema,
	args: WriteArgs,
};

/**
 * @name exports.ContractUpdateMutation
 * @summary ContractUpdate mutation.
 */
module.exports.ContractUpdateMutation = {
	description: 'Update a Contract record',
	resolve: scopeInvariant(scopeOptions, updateContract),
	type: ContractSchema,
	args: WriteArgs,
};

/**
 * @name exports.ContractRemoveMutation
 * @summary ContractRemove mutation.
 */
module.exports.ContractRemoveMutation = {
	description: 'Remove a Contract record',
	resolve: scopeInvariant(scopeOptions, removeContract),
	type: ContractSchema,
	args: DeleteArgs,
};
