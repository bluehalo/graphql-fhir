// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BinarySchema = require('../../schemas/binary.schema');

// Inputs
const BinaryInput = require('../../inputs/binary.input');


const {
	binaryCreateResolver,
	binaryUpdateResolver,
	binaryDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Binary record.'
	},
	resource: {
		type: BinaryInput,
		description: 'Binary Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Binary record for deletion.'
	}
};

/**
 * @name exports.BinaryCreateMutation
 * @summary BinaryCreate Mutation.
 */
module.exports.BinaryCreateMutation = {
	args: WriteArgs,
	description: 'Create a Binary',
	resolve: binaryCreateResolver,
	type: BinarySchema
};

/**
 * @name exports.BinaryUpdateMutation
 * @summary BinaryUpdate Mutation.
 */
module.exports.BinaryUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Binarys',
	resolve: binaryUpdateResolver,
	type: BinarySchema
};

/**
 * @name exports.BinaryDeleteMutation
 * @summary BinaryDelete Mutation.
 */
module.exports.BinaryDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Binary',
	resolve: binaryDeleteResolver,
	type: BinarySchema
};
