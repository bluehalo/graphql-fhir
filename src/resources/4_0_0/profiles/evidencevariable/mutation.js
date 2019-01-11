// Schemas
const EvidenceVariableSchema = require('../../schemas/evidencevariable.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EvidenceVariableInput = require('../../inputs/evidencevariable.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEvidenceVariable,
	updateEvidenceVariable,
	removeEvidenceVariable,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EvidenceVariable',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EvidenceVariable record.',
	},
	resource: {
		type: new GraphQLNonNull(EvidenceVariableInput),
		description: 'EvidenceVariable Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EvidenceVariable record for deletion.',
	},
};

/**
 * @name exports.EvidenceVariableCreateMutation
 * @summary EvidenceVariableCreate mutation.
 */
module.exports.EvidenceVariableCreateMutation = {
	description: 'Create a EvidenceVariable record',
	resolve: scopeInvariant(scopeOptions, createEvidenceVariable),
	type: EvidenceVariableSchema,
	args: WriteArgs,
};

/**
 * @name exports.EvidenceVariableUpdateMutation
 * @summary EvidenceVariableUpdate mutation.
 */
module.exports.EvidenceVariableUpdateMutation = {
	description: 'Update a EvidenceVariable record',
	resolve: scopeInvariant(scopeOptions, updateEvidenceVariable),
	type: EvidenceVariableSchema,
	args: WriteArgs,
};

/**
 * @name exports.EvidenceVariableRemoveMutation
 * @summary EvidenceVariableRemove mutation.
 */
module.exports.EvidenceVariableRemoveMutation = {
	description: 'Remove a EvidenceVariable record',
	resolve: scopeInvariant(scopeOptions, removeEvidenceVariable),
	type: EvidenceVariableSchema,
	args: DeleteArgs,
};
