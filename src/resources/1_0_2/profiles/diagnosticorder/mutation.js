// Schemas
const DiagnosticOrderSchema = require('../../schemas/diagnosticorder.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DiagnosticOrderInput = require('../../inputs/diagnosticorder.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDiagnosticOrder,
	updateDiagnosticOrder,
	removeDiagnosticOrder,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DiagnosticOrder',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DiagnosticOrder record.',
	},
	resource: {
		type: new GraphQLNonNull(DiagnosticOrderInput),
		description: 'DiagnosticOrder Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DiagnosticOrder record for deletion.',
	},
};

/**
 * @name exports.DiagnosticOrderCreateMutation
 * @summary DiagnosticOrderCreate mutation.
 */
module.exports.DiagnosticOrderCreateMutation = {
	description: 'Create a DiagnosticOrder record',
	resolve: scopeInvariant(scopeOptions, createDiagnosticOrder),
	type: DiagnosticOrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.DiagnosticOrderUpdateMutation
 * @summary DiagnosticOrderUpdate mutation.
 */
module.exports.DiagnosticOrderUpdateMutation = {
	description: 'Update a DiagnosticOrder record',
	resolve: scopeInvariant(scopeOptions, updateDiagnosticOrder),
	type: DiagnosticOrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.DiagnosticOrderRemoveMutation
 * @summary DiagnosticOrderRemove mutation.
 */
module.exports.DiagnosticOrderRemoveMutation = {
	description: 'Remove a DiagnosticOrder record',
	resolve: scopeInvariant(scopeOptions, removeDiagnosticOrder),
	type: DiagnosticOrderSchema,
	args: DeleteArgs,
};
