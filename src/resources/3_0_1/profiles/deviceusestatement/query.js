// Schemas
const DeviceUseStatementSchema = require('../../schemas/deviceusestatement.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceUseStatementArgs = require('../../parameters/deviceusestatement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	deviceusestatementResolver,
	deviceusestatementListResolver,
	deviceusestatementInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceUseStatement',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.DeviceUseStatementQuery
 * @summary DeviceUseStatement Query.
 */
module.exports.DeviceUseStatementQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseStatementArgs),
	description: 'Query for a single DeviceUseStatement',
	resolve: scopeInvariant(scopeOptions, deviceusestatementResolver),
	type: DeviceUseStatementSchema,
};

/**
 * @name exports.DeviceUseStatementListQuery
 * @summary DeviceUseStatementList Query.
 */
module.exports.DeviceUseStatementListQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseStatementArgs),
	description: 'Query for multiple DeviceUseStatements',
	resolve: scopeInvariant(scopeOptions, deviceusestatementListResolver),
	type: BundleSchema,
};

/**
 * @name exports.DeviceUseStatementInstanceQuery
 * @summary DeviceUseStatementInstance Query.
 */
module.exports.DeviceUseStatementInstanceQuery = {
	description: 'Get information about a single DeviceUseStatement',
	resolve: scopeInvariant(scopeOptions, deviceusestatementInstanceResolver),
	type: DeviceUseStatementSchema,
};
