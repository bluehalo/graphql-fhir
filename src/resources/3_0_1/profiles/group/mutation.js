// Schemas
const GroupSchema = require('../../schemas/group.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const GroupInput = require('../../inputs/group.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createGroup, updateGroup, removeGroup } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Group',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Group record.',
	},
	resource: {
		type: new GraphQLNonNull(GroupInput),
		description: 'Group Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Group record for deletion.',
	},
};

/**
 * @name exports.GroupCreateMutation
 * @summary GroupCreate mutation.
 */
module.exports.GroupCreateMutation = {
	description: 'Create a Group record',
	resolve: scopeInvariant(scopeOptions, createGroup),
	type: GroupSchema,
	args: WriteArgs,
};

/**
 * @name exports.GroupUpdateMutation
 * @summary GroupUpdate mutation.
 */
module.exports.GroupUpdateMutation = {
	description: 'Update a Group record',
	resolve: scopeInvariant(scopeOptions, updateGroup),
	type: GroupSchema,
	args: WriteArgs,
};

/**
 * @name exports.GroupRemoveMutation
 * @summary GroupRemove mutation.
 */
module.exports.GroupRemoveMutation = {
	description: 'Remove a Group record',
	resolve: scopeInvariant(scopeOptions, removeGroup),
	type: GroupSchema,
	args: DeleteArgs,
};
