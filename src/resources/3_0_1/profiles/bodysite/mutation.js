// Schemas
const BodySiteSchema = require('../../schemas/bodysite.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const BodySiteInput = require('../../inputs/bodysite.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createBodySite,
	updateBodySite,
	removeBodySite,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'BodySite',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a BodySite record.',
	},
	resource: {
		type: new GraphQLNonNull(BodySiteInput),
		description: 'BodySite Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a BodySite record for deletion.',
	},
};

/**
 * @name exports.BodySiteCreateMutation
 * @summary BodySiteCreate mutation.
 */
module.exports.BodySiteCreateMutation = {
	description: 'Create a BodySite record',
	resolve: scopeInvariant(scopeOptions, createBodySite),
	type: BodySiteSchema,
	args: WriteArgs,
};

/**
 * @name exports.BodySiteUpdateMutation
 * @summary BodySiteUpdate mutation.
 */
module.exports.BodySiteUpdateMutation = {
	description: 'Update a BodySite record',
	resolve: scopeInvariant(scopeOptions, updateBodySite),
	type: BodySiteSchema,
	args: WriteArgs,
};

/**
 * @name exports.BodySiteRemoveMutation
 * @summary BodySiteRemove mutation.
 */
module.exports.BodySiteRemoveMutation = {
	description: 'Remove a BodySite record',
	resolve: scopeInvariant(scopeOptions, removeBodySite),
	type: BodySiteSchema,
	args: DeleteArgs,
};
