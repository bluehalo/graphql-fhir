// Schemas
const ProcessResponseSchema = require('../../schemas/processresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ProcessResponseInput = require('../../inputs/processresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createProcessResponse,
	updateProcessResponse,
	removeProcessResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ProcessResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ProcessResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(ProcessResponseInput),
		description: 'ProcessResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ProcessResponse record for deletion.',
	},
};

/**
 * @name exports.ProcessResponseCreateMutation
 * @summary ProcessResponseCreate mutation.
 */
module.exports.ProcessResponseCreateMutation = {
	description: 'Create a ProcessResponse record',
	resolve: scopeInvariant(scopeOptions, createProcessResponse),
	type: ProcessResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcessResponseUpdateMutation
 * @summary ProcessResponseUpdate mutation.
 */
module.exports.ProcessResponseUpdateMutation = {
	description: 'Update a ProcessResponse record',
	resolve: scopeInvariant(scopeOptions, updateProcessResponse),
	type: ProcessResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcessResponseRemoveMutation
 * @summary ProcessResponseRemove mutation.
 */
module.exports.ProcessResponseRemoveMutation = {
	description: 'Remove a ProcessResponse record',
	resolve: scopeInvariant(scopeOptions, removeProcessResponse),
	type: ProcessResponseSchema,
	args: DeleteArgs,
};
