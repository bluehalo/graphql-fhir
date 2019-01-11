// Schemas
const ProcedureSchema = require('../../schemas/procedure.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ProcedureInput = require('../../inputs/procedure.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createProcedure,
	updateProcedure,
	removeProcedure,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Procedure',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Procedure record.',
	},
	resource: {
		type: new GraphQLNonNull(ProcedureInput),
		description: 'Procedure Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Procedure record for deletion.',
	},
};

/**
 * @name exports.ProcedureCreateMutation
 * @summary ProcedureCreate mutation.
 */
module.exports.ProcedureCreateMutation = {
	description: 'Create a Procedure record',
	resolve: scopeInvariant(scopeOptions, createProcedure),
	type: ProcedureSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcedureUpdateMutation
 * @summary ProcedureUpdate mutation.
 */
module.exports.ProcedureUpdateMutation = {
	description: 'Update a Procedure record',
	resolve: scopeInvariant(scopeOptions, updateProcedure),
	type: ProcedureSchema,
	args: WriteArgs,
};

/**
 * @name exports.ProcedureRemoveMutation
 * @summary ProcedureRemove mutation.
 */
module.exports.ProcedureRemoveMutation = {
	description: 'Remove a Procedure record',
	resolve: scopeInvariant(scopeOptions, removeProcedure),
	type: ProcedureSchema,
	args: DeleteArgs,
};
