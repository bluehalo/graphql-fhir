// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceSchema = require('../../schemas/device.schema');

// Inputs
const DeviceInput = require('../../inputs/device.input');


const {
	deviceCreateResolver,
	deviceUpdateResolver,
	deviceDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Device record.'
	},
	resource: {
		type: DeviceInput,
		description: 'Device Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Device record for deletion.'
	}
};

/**
 * @name exports.DeviceCreateMutation
 * @summary DeviceCreate Mutation.
 */
module.exports.DeviceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Device',
	resolve: deviceCreateResolver,
	type: DeviceSchema
};

/**
 * @name exports.DeviceUpdateMutation
 * @summary DeviceUpdate Mutation.
 */
module.exports.DeviceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Devices',
	resolve: deviceUpdateResolver,
	type: DeviceSchema
};

/**
 * @name exports.DeviceDeleteMutation
 * @summary DeviceDelete Mutation.
 */
module.exports.DeviceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Device',
	resolve: deviceDeleteResolver,
	type: DeviceSchema
};
