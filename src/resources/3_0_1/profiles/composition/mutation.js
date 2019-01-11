// Schemas
const CompositionSchema = require('../../schemas/composition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CompositionInput = require('../../inputs/composition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createComposition,
	updateComposition,
	removeComposition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Composition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Composition record.',
	},
	resource: {
		type: new GraphQLNonNull(CompositionInput),
		description: 'Composition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Composition record for deletion.',
	},
};

/**
 * @name exports.CompositionCreateMutation
 * @summary CompositionCreate mutation.
 */
module.exports.CompositionCreateMutation = {
	description: 'Create a Composition record',
	resolve: scopeInvariant(scopeOptions, createComposition),
	type: CompositionSchema,
	args: WriteArgs,
};

/**
 * @name exports.CompositionUpdateMutation
 * @summary CompositionUpdate mutation.
 */
module.exports.CompositionUpdateMutation = {
	description: 'Update a Composition record',
	resolve: scopeInvariant(scopeOptions, updateComposition),
	type: CompositionSchema,
	args: WriteArgs,
};

/**
 * @name exports.CompositionRemoveMutation
 * @summary CompositionRemove mutation.
 */
module.exports.CompositionRemoveMutation = {
	description: 'Remove a Composition record',
	resolve: scopeInvariant(scopeOptions, removeComposition),
	type: CompositionSchema,
	args: DeleteArgs,
};
