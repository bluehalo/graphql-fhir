// Schemas
const ObservationSchema = require('../../schemas/observation.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ObservationInput = require('../../inputs/observation.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createObservation,
	updateObservation,
	removeObservation,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Observation',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Observation record.',
	},
	resource: {
		type: new GraphQLNonNull(ObservationInput),
		description: 'Observation Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Observation record for deletion.',
	},
};

/**
 * @name exports.ObservationCreateMutation
 * @summary ObservationCreate mutation.
 */
module.exports.ObservationCreateMutation = {
	description: 'Create a Observation record',
	resolve: scopeInvariant(scopeOptions, createObservation),
	type: ObservationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ObservationUpdateMutation
 * @summary ObservationUpdate mutation.
 */
module.exports.ObservationUpdateMutation = {
	description: 'Update a Observation record',
	resolve: scopeInvariant(scopeOptions, updateObservation),
	type: ObservationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ObservationRemoveMutation
 * @summary ObservationRemove mutation.
 */
module.exports.ObservationRemoveMutation = {
	description: 'Remove a Observation record',
	resolve: scopeInvariant(scopeOptions, removeObservation),
	type: ObservationSchema,
	args: DeleteArgs,
};
