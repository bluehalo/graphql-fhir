// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const FlagSchema = require('../../schemas/flag.schema');

// Inputs
const FlagInput = require('../../inputs/flag.input');


const {
	flagCreateResolver,
	flagUpdateResolver,
	flagDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Flag record.'
	},
	resource: {
		type: FlagInput,
		description: 'Flag Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Flag record for deletion.'
	}
};

/**
 * @name exports.FlagCreateMutation
 * @summary FlagCreate Mutation.
 */
module.exports.FlagCreateMutation = {
	args: WriteArgs,
	description: 'Create a Flag',
	resolve: flagCreateResolver,
	type: FlagSchema
};

/**
 * @name exports.FlagUpdateMutation
 * @summary FlagUpdate Mutation.
 */
module.exports.FlagUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Flags',
	resolve: flagUpdateResolver,
	type: FlagSchema
};

/**
 * @name exports.FlagDeleteMutation
 * @summary FlagDelete Mutation.
 */
module.exports.FlagDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Flag',
	resolve: flagDeleteResolver,
	type: FlagSchema
};
