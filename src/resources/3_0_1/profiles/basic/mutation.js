// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BasicSchema = require('../../schemas/basic.schema');

// Inputs
const BasicInput = require('../../inputs/basic.input');


const {
	basicCreateResolver,
	basicUpdateResolver,
	basicDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Basic record.'
	},
	resource: {
		type: BasicInput,
		description: 'Basic Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Basic record for deletion.'
	}
};

/**
 * @name exports.BasicCreateMutation
 * @summary BasicCreate Mutation.
 */
module.exports.BasicCreateMutation = {
	args: WriteArgs,
	description: 'Create a Basic',
	resolve: basicCreateResolver,
	type: BasicSchema
};

/**
 * @name exports.BasicUpdateMutation
 * @summary BasicUpdate Mutation.
 */
module.exports.BasicUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Basics',
	resolve: basicUpdateResolver,
	type: BasicSchema
};

/**
 * @name exports.BasicDeleteMutation
 * @summary BasicDelete Mutation.
 */
module.exports.BasicDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Basic',
	resolve: basicDeleteResolver,
	type: BasicSchema
};
