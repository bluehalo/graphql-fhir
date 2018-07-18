// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BundleSchema = require('../../schemas/bundle.schema');

// Inputs
const BundleInput = require('../../inputs/bundle.input');


const {
	bundleCreateResolver,
	bundleUpdateResolver,
	bundleDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Bundle record.'
	},
	resource: {
		type: BundleInput,
		description: 'Bundle Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Bundle record for deletion.'
	}
};

/**
 * @name exports.BundleCreateMutation
 * @summary BundleCreate Mutation.
 */
module.exports.BundleCreateMutation = {
	args: WriteArgs,
	description: 'Create a Bundle',
	resolve: bundleCreateResolver,
	type: BundleSchema
};

/**
 * @name exports.BundleUpdateMutation
 * @summary BundleUpdate Mutation.
 */
module.exports.BundleUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Bundles',
	resolve: bundleUpdateResolver,
	type: BundleSchema
};

/**
 * @name exports.BundleDeleteMutation
 * @summary BundleDelete Mutation.
 */
module.exports.BundleDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Bundle',
	resolve: bundleDeleteResolver,
	type: BundleSchema
};
