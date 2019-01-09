// Schemas
const ProcedureRequestSchema = require('../../schemas/procedurerequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ProcedureRequestInput = require('../../inputs/procedurerequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createProcedureRequest,
	updateProcedureRequest,
	removeProcedureRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ProcedureRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ProcedureRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(ProcedureRequestInput),
		description: 'ProcedureRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ProcedureRequest record for deletion.',
	},
};

/**
 * @name exports.ProcedureRequestCreateMutation
 * @summary ProcedureRequestCreate mutation.
 */
module.exports.ProcedureRequestCreateMutation = {
	description: 'Create a ProcedureRequest record',
	resolve: scopeInvariant(scopeOptions, createProcedureRequest),
	type: ProcedureRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcedureRequestUpdateMutation
 * @summary ProcedureRequestUpdate mutation.
 */
module.exports.ProcedureRequestUpdateMutation = {
	description: 'Update a ProcedureRequest record',
	resolve: scopeInvariant(scopeOptions, updateProcedureRequest),
	type: ProcedureRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcedureRequestRemoveMutation
 * @summary ProcedureRequestRemove mutation.
 */
module.exports.ProcedureRequestRemoveMutation = {
	description: 'Remove a ProcedureRequest record',
	resolve: scopeInvariant(scopeOptions, removeProcedureRequest),
	type: ProcedureRequestSchema,
	args: DeleteArgs,
};
