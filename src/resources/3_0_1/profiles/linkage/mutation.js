// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const LinkageSchema = require('../../schemas/linkage.schema');

// Inputs
const LinkageInput = require('../../inputs/linkage.input');


const {
	linkageCreateResolver,
	linkageUpdateResolver,
	linkageDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Linkage record.'
	},
	resource: {
		type: LinkageInput,
		description: 'Linkage Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Linkage record for deletion.'
	}
};

/**
 * @name exports.LinkageCreateMutation
 * @summary LinkageCreate Mutation.
 */
module.exports.LinkageCreateMutation = {
	args: WriteArgs,
	description: 'Create a Linkage',
	resolve: linkageCreateResolver,
	type: LinkageSchema
};

/**
 * @name exports.LinkageUpdateMutation
 * @summary LinkageUpdate Mutation.
 */
module.exports.LinkageUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Linkages',
	resolve: linkageUpdateResolver,
	type: LinkageSchema
};

/**
 * @name exports.LinkageDeleteMutation
 * @summary LinkageDelete Mutation.
 */
module.exports.LinkageDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Linkage',
	resolve: linkageDeleteResolver,
	type: LinkageSchema
};
