// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceUseStatementSchema = require('../../schemas/deviceusestatement.schema');

// Inputs
const DeviceUseStatementInput = require('../../inputs/deviceusestatement.input');


const {
	deviceusestatementCreateResolver,
	deviceusestatementUpdateResolver,
	deviceusestatementDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceUseStatement record.'
	},
	resource: {
		type: DeviceUseStatementInput,
		description: 'DeviceUseStatement Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DeviceUseStatement record for deletion.'
	}
};

/**
 * @name exports.DeviceUseStatementCreateMutation
 * @summary DeviceUseStatementCreate Mutation.
 */
module.exports.DeviceUseStatementCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceUseStatement',
	resolve: deviceusestatementCreateResolver,
	type: DeviceUseStatementSchema
};

/**
 * @name exports.DeviceUseStatementUpdateMutation
 * @summary DeviceUseStatementUpdate Mutation.
 */
module.exports.DeviceUseStatementUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceUseStatements',
	resolve: deviceusestatementUpdateResolver,
	type: DeviceUseStatementSchema
};

/**
 * @name exports.DeviceUseStatementDeleteMutation
 * @summary DeviceUseStatementDelete Mutation.
 */
module.exports.DeviceUseStatementDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceUseStatement',
	resolve: deviceusestatementDeleteResolver,
	type: DeviceUseStatementSchema
};
