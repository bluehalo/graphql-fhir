// Schemas
const ListSchema = require('../../schemas/list.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ListInput = require('../../inputs/list.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createList, updateList, removeList } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'List',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a List record.',
	},
	resource: {
		type: new GraphQLNonNull(ListInput),
		description: 'List Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a List record for deletion.',
	},
};

/**
 * @name exports.ListCreateMutation
 * @summary ListCreate mutation.
 */
module.exports.ListCreateMutation = {
	description: 'Create a List record',
	resolve: scopeInvariant(scopeOptions, createList),
	type: ListSchema,
	args: WriteArgs,
};

/**
 * @name exports.ListUpdateMutation
 * @summary ListUpdate mutation.
 */
module.exports.ListUpdateMutation = {
	description: 'Update a List record',
	resolve: scopeInvariant(scopeOptions, updateList),
	type: ListSchema,
	args: WriteArgs,
};

/**
 * @name exports.ListRemoveMutation
 * @summary ListRemove mutation.
 */
module.exports.ListRemoveMutation = {
	description: 'Remove a List record',
	resolve: scopeInvariant(scopeOptions, removeList),
	type: ListSchema,
	args: DeleteArgs,
};
