// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ObservationSchema = require('../../schemas/observation.schema');

// Inputs
const ObservationInput = require('../../inputs/observation.input');


const {
	observationCreateResolver,
	observationUpdateResolver,
	observationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Observation record.'
	},
	resource: {
		type: ObservationInput,
		description: 'Observation Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Observation record for deletion.'
	}
};

/**
 * @name exports.ObservationCreateMutation
 * @summary ObservationCreate Mutation.
 */
module.exports.ObservationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Observation',
	resolve: observationCreateResolver,
	type: ObservationSchema
};

/**
 * @name exports.ObservationUpdateMutation
 * @summary ObservationUpdate Mutation.
 */
module.exports.ObservationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Observations',
	resolve: observationUpdateResolver,
	type: ObservationSchema
};

/**
 * @name exports.ObservationDeleteMutation
 * @summary ObservationDelete Mutation.
 */
module.exports.ObservationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Observation',
	resolve: observationDeleteResolver,
	type: ObservationSchema
};
