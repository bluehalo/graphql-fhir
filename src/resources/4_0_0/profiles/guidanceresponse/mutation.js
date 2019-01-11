// Schemas
const GuidanceResponseSchema = require('../../schemas/guidanceresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const GuidanceResponseInput = require('../../inputs/guidanceresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createGuidanceResponse,
	updateGuidanceResponse,
	removeGuidanceResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'GuidanceResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a GuidanceResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(GuidanceResponseInput),
		description: 'GuidanceResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a GuidanceResponse record for deletion.',
	},
};

/**
 * @name exports.GuidanceResponseCreateMutation
 * @summary GuidanceResponseCreate mutation.
 */
module.exports.GuidanceResponseCreateMutation = {
	description: 'Create a GuidanceResponse record',
	resolve: scopeInvariant(scopeOptions, createGuidanceResponse),
	type: GuidanceResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.GuidanceResponseUpdateMutation
 * @summary GuidanceResponseUpdate mutation.
 */
module.exports.GuidanceResponseUpdateMutation = {
	description: 'Update a GuidanceResponse record',
	resolve: scopeInvariant(scopeOptions, updateGuidanceResponse),
	type: GuidanceResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.GuidanceResponseRemoveMutation
 * @summary GuidanceResponseRemove mutation.
 */
module.exports.GuidanceResponseRemoveMutation = {
	description: 'Remove a GuidanceResponse record',
	resolve: scopeInvariant(scopeOptions, removeGuidanceResponse),
	type: GuidanceResponseSchema,
	args: DeleteArgs,
};
