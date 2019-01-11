// Schemas
const RequestGroupSchema = require('../../schemas/requestgroup.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const RequestGroupInput = require('../../inputs/requestgroup.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createRequestGroup,
	updateRequestGroup,
	removeRequestGroup,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RequestGroup',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a RequestGroup record.',
	},
	resource: {
		type: new GraphQLNonNull(RequestGroupInput),
		description: 'RequestGroup Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a RequestGroup record for deletion.',
	},
};

/**
 * @name exports.RequestGroupCreateMutation
 * @summary RequestGroupCreate mutation.
 */
module.exports.RequestGroupCreateMutation = {
	description: 'Create a RequestGroup record',
	resolve: scopeInvariant(scopeOptions, createRequestGroup),
	type: RequestGroupSchema,
	args: WriteArgs,
};

/**
 * @name exports.RequestGroupUpdateMutation
 * @summary RequestGroupUpdate mutation.
 */
module.exports.RequestGroupUpdateMutation = {
	description: 'Update a RequestGroup record',
	resolve: scopeInvariant(scopeOptions, updateRequestGroup),
	type: RequestGroupSchema,
	args: WriteArgs,
};

/**
 * @name exports.RequestGroupRemoveMutation
 * @summary RequestGroupRemove mutation.
 */
module.exports.RequestGroupRemoveMutation = {
	description: 'Remove a RequestGroup record',
	resolve: scopeInvariant(scopeOptions, removeRequestGroup),
	type: RequestGroupSchema,
	args: DeleteArgs,
};
