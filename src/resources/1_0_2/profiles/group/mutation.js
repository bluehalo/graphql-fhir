// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const GroupSchema = require('../../schemas/group.schema');

// Inputs
const GroupInput = require('../../inputs/group.input');


const {
	groupCreateResolver,
	groupUpdateResolver,
	groupDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Group record.'
	},
	resource: {
		type: GroupInput,
		description: 'Group Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Group record for deletion.'
	}
};

/**
 * @name exports.GroupCreateMutation
 * @summary GroupCreate Mutation.
 */
module.exports.GroupCreateMutation = {
	args: WriteArgs,
	description: 'Create a Group',
	resolve: groupCreateResolver,
	type: GroupSchema
};

/**
 * @name exports.GroupUpdateMutation
 * @summary GroupUpdate Mutation.
 */
module.exports.GroupUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Groups',
	resolve: groupUpdateResolver,
	type: GroupSchema
};

/**
 * @name exports.GroupDeleteMutation
 * @summary GroupDelete Mutation.
 */
module.exports.GroupDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Group',
	resolve: groupDeleteResolver,
	type: GroupSchema
};
