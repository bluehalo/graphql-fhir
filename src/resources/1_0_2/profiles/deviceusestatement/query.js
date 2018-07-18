// Schemas
const DeviceUseStatementSchema = require('../../schemas/deviceusestatement.schema');

// Arguments
const DeviceUseStatementArgs = require('../../parameters/deviceusestatement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

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
	type: new GraphQLList(DeviceUseStatementSchema)
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
