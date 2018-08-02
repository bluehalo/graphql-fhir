// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MeasureSchema = require('../../schemas/measure.schema');

// Inputs
const MeasureInput = require('../../inputs/measure.input');


const {
	measureCreateResolver,
	measureUpdateResolver,
	measureDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Measure record.'
	},
	resource: {
		type: MeasureInput,
		description: 'Measure Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Measure record for deletion.'
	}
};

/**
 * @name exports.MeasureCreateMutation
 * @summary MeasureCreate Mutation.
 */
module.exports.MeasureCreateMutation = {
	args: WriteArgs,
	description: 'Create a Measure',
	resolve: measureCreateResolver,
	type: MeasureSchema
};

/**
 * @name exports.MeasureUpdateMutation
 * @summary MeasureUpdate Mutation.
 */
module.exports.MeasureUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Measures',
	resolve: measureUpdateResolver,
	type: MeasureSchema
};

/**
 * @name exports.MeasureDeleteMutation
 * @summary MeasureDelete Mutation.
 */
module.exports.MeasureDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Measure',
	resolve: measureDeleteResolver,
	type: MeasureSchema
};
