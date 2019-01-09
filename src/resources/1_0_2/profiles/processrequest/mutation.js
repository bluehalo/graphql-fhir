// Schemas
const ProcessRequestSchema = require('../../schemas/processrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ProcessRequestInput = require('../../inputs/processrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createProcessRequest,
	updateProcessRequest,
	removeProcessRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ProcessRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ProcessRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(ProcessRequestInput),
		description: 'ProcessRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ProcessRequest record for deletion.',
	},
};

/**
 * @name exports.ProcessRequestCreateMutation
 * @summary ProcessRequestCreate mutation.
 */
module.exports.ProcessRequestCreateMutation = {
	description: 'Create a ProcessRequest record',
	resolve: scopeInvariant(scopeOptions, createProcessRequest),
	type: ProcessRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcessRequestUpdateMutation
 * @summary ProcessRequestUpdate mutation.
 */
module.exports.ProcessRequestUpdateMutation = {
	description: 'Update a ProcessRequest record',
	resolve: scopeInvariant(scopeOptions, updateProcessRequest),
	type: ProcessRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcessRequestRemoveMutation
 * @summary ProcessRequestRemove mutation.
 */
module.exports.ProcessRequestRemoveMutation = {
	description: 'Remove a ProcessRequest record',
	resolve: scopeInvariant(scopeOptions, removeProcessRequest),
	type: ProcessRequestSchema,
	args: DeleteArgs,
};
