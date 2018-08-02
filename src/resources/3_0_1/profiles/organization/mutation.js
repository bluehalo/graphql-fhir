// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OrganizationSchema = require('../../schemas/organization.schema');

// Inputs
const OrganizationInput = require('../../inputs/organization.input');


const {
	organizationCreateResolver,
	organizationUpdateResolver,
	organizationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Organization record.'
	},
	resource: {
		type: OrganizationInput,
		description: 'Organization Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Organization record for deletion.'
	}
};

/**
 * @name exports.OrganizationCreateMutation
 * @summary OrganizationCreate Mutation.
 */
module.exports.OrganizationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Organization',
	resolve: organizationCreateResolver,
	type: OrganizationSchema
};

/**
 * @name exports.OrganizationUpdateMutation
 * @summary OrganizationUpdate Mutation.
 */
module.exports.OrganizationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Organizations',
	resolve: organizationUpdateResolver,
	type: OrganizationSchema
};

/**
 * @name exports.OrganizationDeleteMutation
 * @summary OrganizationDelete Mutation.
 */
module.exports.OrganizationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Organization',
	resolve: organizationDeleteResolver,
	type: OrganizationSchema
};
