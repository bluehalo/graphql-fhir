// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceComponentSchema = require('../../schemas/devicecomponent.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceComponentArgs = require('../../parameters/devicecomponent.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, DeviceComponentArgs);

// Resolvers
const {
	getDeviceComponent,
	getDeviceComponentList,
	getDeviceComponentInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceComponent',
	action: 'read',
};

/**
 * @name exports.DeviceComponentQuery
 * @summary DeviceComponent query.
 */
module.exports.DeviceComponentQuery = {
	description: 'Query for a single DeviceComponent',
	resolve: scopeInvariant(scopeOptions, getDeviceComponent),
	type: DeviceComponentSchema,
	args: args,
};

/**
 * @name exports.DeviceComponentListQuery
 * @summary DeviceComponent query.
 */
module.exports.DeviceComponentListQuery = {
	description: 'Query for a more than or just one DeviceComponent',
	resolve: scopeInvariant(scopeOptions, getDeviceComponentList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceComponentInstanceQuery
 * @summary DeviceComponent query.
 */
module.exports.DeviceComponentInstanceQuery = {
	description: 'Access information about a single DeviceComponent',
	resolve: scopeInvariant(scopeOptions, getDeviceComponentInstance),
	type: DeviceComponentSchema,
	args: args,
};
