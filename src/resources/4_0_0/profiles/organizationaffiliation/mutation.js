// Schemas
const OrganizationAffiliationSchema = require('../../schemas/organizationaffiliation.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const OrganizationAffiliationInput = require('../../inputs/organizationaffiliation.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createOrganizationAffiliation,
	updateOrganizationAffiliation,
	removeOrganizationAffiliation,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'OrganizationAffiliation',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a OrganizationAffiliation record.',
	},
	resource: {
		type: new GraphQLNonNull(OrganizationAffiliationInput),
		description: 'OrganizationAffiliation Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a OrganizationAffiliation record for deletion.',
	},
};

/**
 * @name exports.OrganizationAffiliationCreateMutation
 * @summary OrganizationAffiliationCreate mutation.
 */
module.exports.OrganizationAffiliationCreateMutation = {
	description: 'Create a OrganizationAffiliation record',
	resolve: scopeInvariant(scopeOptions, createOrganizationAffiliation),
	type: OrganizationAffiliationSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrganizationAffiliationUpdateMutation
 * @summary OrganizationAffiliationUpdate mutation.
 */
module.exports.OrganizationAffiliationUpdateMutation = {
	description: 'Update a OrganizationAffiliation record',
	resolve: scopeInvariant(scopeOptions, updateOrganizationAffiliation),
	type: OrganizationAffiliationSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrganizationAffiliationRemoveMutation
 * @summary OrganizationAffiliationRemove mutation.
 */
module.exports.OrganizationAffiliationRemoveMutation = {
	description: 'Remove a OrganizationAffiliation record',
	resolve: scopeInvariant(scopeOptions, removeOrganizationAffiliation),
	type: OrganizationAffiliationSchema,
	args: DeleteArgs,
};
