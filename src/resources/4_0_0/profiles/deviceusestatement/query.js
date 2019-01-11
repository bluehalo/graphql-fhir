// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceUseStatementSchema = require('../../schemas/deviceusestatement.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceUseStatementArgs = require('../../parameters/deviceusestatement.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	DeviceUseStatementArgs,
);

// Resolvers
const {
	getDeviceUseStatement,
	getDeviceUseStatementList,
	getDeviceUseStatementInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceUseStatement',
	action: 'read',
};

/**
 * @name exports.DeviceUseStatementQuery
 * @summary DeviceUseStatement query.
 */
module.exports.DeviceUseStatementQuery = {
	description: 'Query for a single DeviceUseStatement',
	resolve: scopeInvariant(scopeOptions, getDeviceUseStatement),
	type: DeviceUseStatementSchema,
	args: args,
};

/**
 * @name exports.DeviceUseStatementListQuery
 * @summary DeviceUseStatement query.
 */
module.exports.DeviceUseStatementListQuery = {
	description: 'Query for a more than or just one DeviceUseStatement',
	resolve: scopeInvariant(scopeOptions, getDeviceUseStatementList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceUseStatementInstanceQuery
 * @summary DeviceUseStatement query.
 */
module.exports.DeviceUseStatementInstanceQuery = {
	description: 'Access information about a single DeviceUseStatement',
	resolve: scopeInvariant(scopeOptions, getDeviceUseStatementInstance),
	type: DeviceUseStatementSchema,
	args: args,
};
