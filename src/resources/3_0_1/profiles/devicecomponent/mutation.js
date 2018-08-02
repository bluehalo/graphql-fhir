// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceComponentSchema = require('../../schemas/devicecomponent.schema');

// Inputs
const DeviceComponentInput = require('../../inputs/devicecomponent.input');


const {
	devicecomponentCreateResolver,
	devicecomponentUpdateResolver,
	devicecomponentDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceComponent record.'
	},
	resource: {
		type: DeviceComponentInput,
		description: 'DeviceComponent Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DeviceComponent record for deletion.'
	}
};

/**
 * @name exports.DeviceComponentCreateMutation
 * @summary DeviceComponentCreate Mutation.
 */
module.exports.DeviceComponentCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceComponent',
	resolve: devicecomponentCreateResolver,
	type: DeviceComponentSchema
};

/**
 * @name exports.DeviceComponentUpdateMutation
 * @summary DeviceComponentUpdate Mutation.
 */
module.exports.DeviceComponentUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceComponents',
	resolve: devicecomponentUpdateResolver,
	type: DeviceComponentSchema
};

/**
 * @name exports.DeviceComponentDeleteMutation
 * @summary DeviceComponentDelete Mutation.
 */
module.exports.DeviceComponentDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceComponent',
	resolve: devicecomponentDeleteResolver,
	type: DeviceComponentSchema
};
