// Schemas
const BinarySchema = require('../../schemas/binary.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const BinaryInput = require('../../inputs/binary.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createBinary, updateBinary, removeBinary } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Binary',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Binary record.',
	},
	resource: {
		type: new GraphQLNonNull(BinaryInput),
		description: 'Binary Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Binary record for deletion.',
	},
};

/**
 * @name exports.BinaryCreateMutation
 * @summary BinaryCreate mutation.
 */
module.exports.BinaryCreateMutation = {
	description: 'Create a Binary record',
	resolve: scopeInvariant(scopeOptions, createBinary),
	type: BinarySchema,
	args: WriteArgs,
};

/**
 * @name exports.BinaryUpdateMutation
 * @summary BinaryUpdate mutation.
 */
module.exports.BinaryUpdateMutation = {
	description: 'Update a Binary record',
	resolve: scopeInvariant(scopeOptions, updateBinary),
	type: BinarySchema,
	args: WriteArgs,
};

/**
 * @name exports.BinaryRemoveMutation
 * @summary BinaryRemove mutation.
 */
module.exports.BinaryRemoveMutation = {
	description: 'Remove a Binary record',
	resolve: scopeInvariant(scopeOptions, removeBinary),
	type: BinarySchema,
	args: DeleteArgs,
};
