// Schemas
const DeviceUseStatementSchema = require('../../schemas/deviceusestatement.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceUseStatementArgs = require('../../parameters/deviceusestatement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	deviceusestatementResolver,
	deviceusestatementListResolver,
	deviceusestatementInstanceResolver
} = require('./resolver');

/**
 * @name exports.DeviceUseStatementQuery
 * @summary DeviceUseStatement Query.
 */
module.exports.DeviceUseStatementQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseStatementArgs),
	description: 'Query for a single DeviceUseStatement',
	resolve: deviceusestatementResolver,
	type: DeviceUseStatementSchema
};

/**
 * @name exports.DeviceUseStatementListQuery
 * @summary DeviceUseStatementList Query.
 */
module.exports.DeviceUseStatementListQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseStatementArgs),
	description: 'Query for multiple DeviceUseStatements',
	resolve: deviceusestatementListResolver,
	type: BundleSchema
};

/**
 * @name exports.DeviceUseStatementInstanceQuery
 * @summary DeviceUseStatementInstance Query.
 */
module.exports.DeviceUseStatementInstanceQuery = {
	description: 'Get information about a single DeviceUseStatement',
	resolve: deviceusestatementInstanceResolver,
	type: DeviceUseStatementSchema
};
