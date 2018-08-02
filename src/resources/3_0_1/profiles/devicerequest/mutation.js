// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceRequestSchema = require('../../schemas/devicerequest.schema');

// Inputs
const DeviceRequestInput = require('../../inputs/devicerequest.input');


const {
	devicerequestCreateResolver,
	devicerequestUpdateResolver,
	devicerequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceRequest record.'
	},
	resource: {
		type: DeviceRequestInput,
		description: 'DeviceRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DeviceRequest record for deletion.'
	}
};

/**
 * @name exports.DeviceRequestCreateMutation
 * @summary DeviceRequestCreate Mutation.
 */
module.exports.DeviceRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceRequest',
	resolve: devicerequestCreateResolver,
	type: DeviceRequestSchema
};

/**
 * @name exports.DeviceRequestUpdateMutation
 * @summary DeviceRequestUpdate Mutation.
 */
module.exports.DeviceRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceRequests',
	resolve: devicerequestUpdateResolver,
	type: DeviceRequestSchema
};

/**
 * @name exports.DeviceRequestDeleteMutation
 * @summary DeviceRequestDelete Mutation.
 */
module.exports.DeviceRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceRequest',
	resolve: devicerequestDeleteResolver,
	type: DeviceRequestSchema
};
