// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ObservationSchema = require('../../schemas/observation.schema');

// Inputs
const ObservationInput = require('../../inputs/observation.input');

// Resolvers
const {
	observationCreateResolver,
	observationUpdateResolver,
	observationDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Observation',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Observation record for deletion.',
	},
};

/**
 * @name exports.ObservationCreateMutation
 * @summary ObservationCreate Mutation.
 */
module.exports.ObservationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Observation',
	resolve: scopeInvariant(scopeOptions, observationCreateResolver),
	type: ObservationSchema,
};

/**
 * @name exports.ObservationUpdateMutation
 * @summary ObservationUpdate Mutation.
 */
module.exports.ObservationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Observations',
	resolve: scopeInvariant(scopeOptions, observationUpdateResolver),
	type: ObservationSchema,
};

/**
 * @name exports.ObservationDeleteMutation
 * @summary ObservationDelete Mutation.
 */
module.exports.ObservationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Observation',
	resolve: scopeInvariant(scopeOptions, observationDeleteResolver),
	type: ObservationSchema,
};
