// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ListSchema = require('../../schemas/list.schema');

// Inputs
const ListInput = require('../../inputs/list.input');


const {
	listCreateResolver,
	listUpdateResolver,
	listDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a List record.'
	},
	resource: {
		type: ListInput,
		description: 'List Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a List record for deletion.'
	}
};

/**
 * @name exports.ListCreateMutation
 * @summary ListCreate Mutation.
 */
module.exports.ListCreateMutation = {
	args: WriteArgs,
	description: 'Create a List',
	resolve: listCreateResolver,
	type: ListSchema
};

/**
 * @name exports.ListUpdateMutation
 * @summary ListUpdate Mutation.
 */
module.exports.ListUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Lists',
	resolve: listUpdateResolver,
	type: ListSchema
};

/**
 * @name exports.ListDeleteMutation
 * @summary ListDelete Mutation.
 */
module.exports.ListDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single List',
	resolve: listDeleteResolver,
	type: ListSchema
};
