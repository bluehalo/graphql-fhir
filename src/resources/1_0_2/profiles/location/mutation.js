// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const LocationSchema = require('../../schemas/location.schema');

// Inputs
const LocationInput = require('../../inputs/location.input');


const {
	locationCreateResolver,
	locationUpdateResolver,
	locationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Location record.'
	},
	resource: {
		type: LocationInput,
		description: 'Location Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Location record for deletion.'
	}
};

/**
 * @name exports.LocationCreateMutation
 * @summary LocationCreate Mutation.
 */
module.exports.LocationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Location',
	resolve: locationCreateResolver,
	type: LocationSchema
};

/**
 * @name exports.LocationUpdateMutation
 * @summary LocationUpdate Mutation.
 */
module.exports.LocationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Locations',
	resolve: locationUpdateResolver,
	type: LocationSchema
};

/**
 * @name exports.LocationDeleteMutation
 * @summary LocationDelete Mutation.
 */
module.exports.LocationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Location',
	resolve: locationDeleteResolver,
	type: LocationSchema
};
