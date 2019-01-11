// Schemas
const FlagSchema = require('../../schemas/flag.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const FlagInput = require('../../inputs/flag.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createFlag, updateFlag, removeFlag } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Flag',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Flag record.',
	},
	resource: {
		type: new GraphQLNonNull(FlagInput),
		description: 'Flag Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Flag record for deletion.',
	},
};

/**
 * @name exports.FlagCreateMutation
 * @summary FlagCreate mutation.
 */
module.exports.FlagCreateMutation = {
	description: 'Create a Flag record',
	resolve: scopeInvariant(scopeOptions, createFlag),
	type: FlagSchema,
	args: WriteArgs,
};

/**
 * @name exports.FlagUpdateMutation
 * @summary FlagUpdate mutation.
 */
module.exports.FlagUpdateMutation = {
	description: 'Update a Flag record',
	resolve: scopeInvariant(scopeOptions, updateFlag),
	type: FlagSchema,
	args: WriteArgs,
};

/**
 * @name exports.FlagRemoveMutation
 * @summary FlagRemove mutation.
 */
module.exports.FlagRemoveMutation = {
	description: 'Remove a Flag record',
	resolve: scopeInvariant(scopeOptions, removeFlag),
	type: FlagSchema,
	args: DeleteArgs,
};
