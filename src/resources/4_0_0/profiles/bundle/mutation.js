// Schemas
const BundleSchema = require('../../schemas/bundle.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const BundleInput = require('../../inputs/bundle.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createBundle, updateBundle, removeBundle } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Bundle',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Bundle record.',
	},
	resource: {
		type: new GraphQLNonNull(BundleInput),
		description: 'Bundle Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Bundle record for deletion.',
	},
};

/**
 * @name exports.BundleCreateMutation
 * @summary BundleCreate mutation.
 */
module.exports.BundleCreateMutation = {
	description: 'Create a Bundle record',
	resolve: scopeInvariant(scopeOptions, createBundle),
	type: BundleSchema,
	args: WriteArgs,
};

/**
 * @name exports.BundleUpdateMutation
 * @summary BundleUpdate mutation.
 */
module.exports.BundleUpdateMutation = {
	description: 'Update a Bundle record',
	resolve: scopeInvariant(scopeOptions, updateBundle),
	type: BundleSchema,
	args: WriteArgs,
};

/**
 * @name exports.BundleRemoveMutation
 * @summary BundleRemove mutation.
 */
module.exports.BundleRemoveMutation = {
	description: 'Remove a Bundle record',
	resolve: scopeInvariant(scopeOptions, removeBundle),
	type: BundleSchema,
	args: DeleteArgs,
};
