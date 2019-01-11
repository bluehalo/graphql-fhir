// Schemas
const MolecularSequenceSchema = require('../../schemas/molecularsequence.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MolecularSequenceInput = require('../../inputs/molecularsequence.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMolecularSequence,
	updateMolecularSequence,
	removeMolecularSequence,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MolecularSequence',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MolecularSequence record.',
	},
	resource: {
		type: new GraphQLNonNull(MolecularSequenceInput),
		description: 'MolecularSequence Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MolecularSequence record for deletion.',
	},
};

/**
 * @name exports.MolecularSequenceCreateMutation
 * @summary MolecularSequenceCreate mutation.
 */
module.exports.MolecularSequenceCreateMutation = {
	description: 'Create a MolecularSequence record',
	resolve: scopeInvariant(scopeOptions, createMolecularSequence),
	type: MolecularSequenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.MolecularSequenceUpdateMutation
 * @summary MolecularSequenceUpdate mutation.
 */
module.exports.MolecularSequenceUpdateMutation = {
	description: 'Update a MolecularSequence record',
	resolve: scopeInvariant(scopeOptions, updateMolecularSequence),
	type: MolecularSequenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.MolecularSequenceRemoveMutation
 * @summary MolecularSequenceRemove mutation.
 */
module.exports.MolecularSequenceRemoveMutation = {
	description: 'Remove a MolecularSequence record',
	resolve: scopeInvariant(scopeOptions, removeMolecularSequence),
	type: MolecularSequenceSchema,
	args: DeleteArgs,
};
