// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OrganizationSchema = require('../../schemas/organization.schema');

// Inputs
const OrganizationInput = require('../../inputs/organization.input');

// Resolvers
const {
	organizationCreateResolver,
	organizationUpdateResolver,
	organizationDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Organization',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a Organization record.',
	},
	resource: {
		type: new GraphQLNonNull(OrganizationInput),
		description: 'Organization Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Organization record for deletion.',
	},
};

/**
 * @name exports.OrganizationCreateMutation
 * @summary OrganizationCreate Mutation.
 */
module.exports.OrganizationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Organization',
	resolve: scopeInvariant(scopeOptions, organizationCreateResolver),
	type: OrganizationSchema,
};

/**
 * @name exports.OrganizationUpdateMutation
 * @summary OrganizationUpdate Mutation.
 */
module.exports.OrganizationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Organizations',
	resolve: scopeInvariant(scopeOptions, organizationUpdateResolver),
	type: OrganizationSchema,
};

/**
 * @name exports.OrganizationDeleteMutation
 * @summary OrganizationDelete Mutation.
 */
module.exports.OrganizationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Organization',
	resolve: scopeInvariant(scopeOptions, organizationDeleteResolver),
	type: OrganizationSchema,
};
