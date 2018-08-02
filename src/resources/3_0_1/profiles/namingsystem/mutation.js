// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const NamingSystemSchema = require('../../schemas/namingsystem.schema');

// Inputs
const NamingSystemInput = require('../../inputs/namingsystem.input');


const {
	namingsystemCreateResolver,
	namingsystemUpdateResolver,
	namingsystemDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a NamingSystem record.'
	},
	resource: {
		type: NamingSystemInput,
		description: 'NamingSystem Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a NamingSystem record for deletion.'
	}
};

/**
 * @name exports.NamingSystemCreateMutation
 * @summary NamingSystemCreate Mutation.
 */
module.exports.NamingSystemCreateMutation = {
	args: WriteArgs,
	description: 'Create a NamingSystem',
	resolve: namingsystemCreateResolver,
	type: NamingSystemSchema
};

/**
 * @name exports.NamingSystemUpdateMutation
 * @summary NamingSystemUpdate Mutation.
 */
module.exports.NamingSystemUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple NamingSystems',
	resolve: namingsystemUpdateResolver,
	type: NamingSystemSchema
};

/**
 * @name exports.NamingSystemDeleteMutation
 * @summary NamingSystemDelete Mutation.
 */
module.exports.NamingSystemDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single NamingSystem',
	resolve: namingsystemDeleteResolver,
	type: NamingSystemSchema
};
