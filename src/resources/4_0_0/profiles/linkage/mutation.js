// Schemas
const LinkageSchema = require('../../schemas/linkage.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const LinkageInput = require('../../inputs/linkage.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createLinkage, updateLinkage, removeLinkage } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Linkage',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Linkage record.',
	},
	resource: {
		type: new GraphQLNonNull(LinkageInput),
		description: 'Linkage Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Linkage record for deletion.',
	},
};

/**
 * @name exports.LinkageCreateMutation
 * @summary LinkageCreate mutation.
 */
module.exports.LinkageCreateMutation = {
	description: 'Create a Linkage record',
	resolve: scopeInvariant(scopeOptions, createLinkage),
	type: LinkageSchema,
	args: WriteArgs,
};

/**
 * @name exports.LinkageUpdateMutation
 * @summary LinkageUpdate mutation.
 */
module.exports.LinkageUpdateMutation = {
	description: 'Update a Linkage record',
	resolve: scopeInvariant(scopeOptions, updateLinkage),
	type: LinkageSchema,
	args: WriteArgs,
};

/**
 * @name exports.LinkageRemoveMutation
 * @summary LinkageRemove mutation.
 */
module.exports.LinkageRemoveMutation = {
	description: 'Remove a Linkage record',
	resolve: scopeInvariant(scopeOptions, removeLinkage),
	type: LinkageSchema,
	args: DeleteArgs,
};
