// Schemas
const OrganizationSchema = require('../../schemas/organization.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const OrganizationInput = require('../../inputs/organization.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createOrganization,
	updateOrganization,
	removeOrganization,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Organization',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
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
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Organization record for deletion.',
	},
};

/**
 * @name exports.OrganizationCreateMutation
 * @summary OrganizationCreate mutation.
 */
module.exports.OrganizationCreateMutation = {
	description: 'Create a Organization record',
	resolve: scopeInvariant(scopeOptions, createOrganization),
	type: OrganizationSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrganizationUpdateMutation
 * @summary OrganizationUpdate mutation.
 */
module.exports.OrganizationUpdateMutation = {
	description: 'Update a Organization record',
	resolve: scopeInvariant(scopeOptions, updateOrganization),
	type: OrganizationSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrganizationRemoveMutation
 * @summary OrganizationRemove mutation.
 */
module.exports.OrganizationRemoveMutation = {
	description: 'Remove a Organization record',
	resolve: scopeInvariant(scopeOptions, removeOrganization),
	type: OrganizationSchema,
	args: DeleteArgs,
};
