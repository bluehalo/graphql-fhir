// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BundleSchema = require('../../schemas/bundle.schema');

// Inputs
const BundleInput = require('../../inputs/bundle.input');

// Resolvers
const {
	bundleCreateResolver,
	bundleUpdateResolver,
	bundleDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Bundle',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Bundle record.',
	},
	resource: {
		type: new GraphQLNonNull(BundleInput),
		description: 'Bundle Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Bundle record for deletion.',
	},
};

/**
 * @name exports.BundleCreateMutation
 * @summary BundleCreate Mutation.
 */
module.exports.BundleCreateMutation = {
	args: WriteArgs,
	description: 'Create a Bundle',
	resolve: scopeInvariant(scopeOptions, bundleCreateResolver),
	type: BundleSchema,
};

/**
 * @name exports.BundleUpdateMutation
 * @summary BundleUpdate Mutation.
 */
module.exports.BundleUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Bundles',
	resolve: scopeInvariant(scopeOptions, bundleUpdateResolver),
	type: BundleSchema,
};

/**
 * @name exports.BundleDeleteMutation
 * @summary BundleDelete Mutation.
 */
module.exports.BundleDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Bundle',
	resolve: scopeInvariant(scopeOptions, bundleDeleteResolver),
	type: BundleSchema,
};
