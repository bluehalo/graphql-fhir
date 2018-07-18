// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceUseRequestSchema = require('../../schemas/deviceuserequest.schema');

// Inputs
const DeviceUseRequestInput = require('../../inputs/deviceuserequest.input');


const {
	deviceuserequestCreateResolver,
	deviceuserequestUpdateResolver,
	deviceuserequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceUseRequest record.'
	},
	resource: {
		type: DeviceUseRequestInput,
		description: 'DeviceUseRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DeviceUseRequest record for deletion.'
	}
};

/**
 * @name exports.DeviceUseRequestCreateMutation
 * @summary DeviceUseRequestCreate Mutation.
 */
module.exports.DeviceUseRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceUseRequest',
	resolve: deviceuserequestCreateResolver,
	type: DeviceUseRequestSchema
};

/**
 * @name exports.DeviceUseRequestUpdateMutation
 * @summary DeviceUseRequestUpdate Mutation.
 */
module.exports.DeviceUseRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceUseRequests',
	resolve: deviceuserequestUpdateResolver,
	type: DeviceUseRequestSchema
};

/**
 * @name exports.DeviceUseRequestDeleteMutation
 * @summary DeviceUseRequestDelete Mutation.
 */
module.exports.DeviceUseRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceUseRequest',
	resolve: deviceuserequestDeleteResolver,
	type: DeviceUseRequestSchema
};
