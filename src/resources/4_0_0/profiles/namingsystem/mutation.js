// Schemas
const NamingSystemSchema = require('../../schemas/namingsystem.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const NamingSystemInput = require('../../inputs/namingsystem.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createNamingSystem,
	updateNamingSystem,
	removeNamingSystem,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'NamingSystem',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a NamingSystem record.',
	},
	resource: {
		type: new GraphQLNonNull(NamingSystemInput),
		description: 'NamingSystem Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a NamingSystem record for deletion.',
	},
};

/**
 * @name exports.NamingSystemCreateMutation
 * @summary NamingSystemCreate mutation.
 */
module.exports.NamingSystemCreateMutation = {
	description: 'Create a NamingSystem record',
	resolve: scopeInvariant(scopeOptions, createNamingSystem),
	type: NamingSystemSchema,
	args: WriteArgs,
};

/**
 * @name exports.NamingSystemUpdateMutation
 * @summary NamingSystemUpdate mutation.
 */
module.exports.NamingSystemUpdateMutation = {
	description: 'Update a NamingSystem record',
	resolve: scopeInvariant(scopeOptions, updateNamingSystem),
	type: NamingSystemSchema,
	args: WriteArgs,
};

/**
 * @name exports.NamingSystemRemoveMutation
 * @summary NamingSystemRemove mutation.
 */
module.exports.NamingSystemRemoveMutation = {
	description: 'Remove a NamingSystem record',
	resolve: scopeInvariant(scopeOptions, removeNamingSystem),
	type: NamingSystemSchema,
	args: DeleteArgs,
};
