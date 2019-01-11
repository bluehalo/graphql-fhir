// Schemas
const SequenceSchema = require('../../schemas/sequence.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SequenceInput = require('../../inputs/sequence.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSequence,
	updateSequence,
	removeSequence,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Sequence',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Sequence record.',
	},
	resource: {
		type: new GraphQLNonNull(SequenceInput),
		description: 'Sequence Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Sequence record for deletion.',
	},
};

/**
 * @name exports.SequenceCreateMutation
 * @summary SequenceCreate mutation.
 */
module.exports.SequenceCreateMutation = {
	description: 'Create a Sequence record',
	resolve: scopeInvariant(scopeOptions, createSequence),
	type: SequenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.SequenceUpdateMutation
 * @summary SequenceUpdate mutation.
 */
module.exports.SequenceUpdateMutation = {
	description: 'Update a Sequence record',
	resolve: scopeInvariant(scopeOptions, updateSequence),
	type: SequenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.SequenceRemoveMutation
 * @summary SequenceRemove mutation.
 */
module.exports.SequenceRemoveMutation = {
	description: 'Remove a Sequence record',
	resolve: scopeInvariant(scopeOptions, removeSequence),
	type: SequenceSchema,
	args: DeleteArgs,
};
