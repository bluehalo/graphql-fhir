// Schemas
const DeviceComponentSchema = require('../../schemas/devicecomponent.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceComponentArgs = require('../../parameters/devicecomponent.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	devicecomponentResolver,
	devicecomponentListResolver,
	devicecomponentInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceComponent',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.DeviceComponentQuery
 * @summary DeviceComponent Query.
 */
module.exports.DeviceComponentQuery = {
	args: Object.assign({}, CommonArgs, DeviceComponentArgs),
	description: 'Query for a single DeviceComponent',
	resolve: scopeInvariant(scopeOptions, devicecomponentResolver),
	type: DeviceComponentSchema,
};

/**
 * @name exports.DeviceComponentListQuery
 * @summary DeviceComponentList Query.
 */
module.exports.DeviceComponentListQuery = {
	args: Object.assign({}, CommonArgs, DeviceComponentArgs),
	description: 'Query for multiple DeviceComponents',
	resolve: scopeInvariant(scopeOptions, devicecomponentListResolver),
	type: BundleSchema,
};

/**
 * @name exports.DeviceComponentInstanceQuery
 * @summary DeviceComponentInstance Query.
 */
module.exports.DeviceComponentInstanceQuery = {
	description: 'Get information about a single DeviceComponent',
	resolve: scopeInvariant(scopeOptions, devicecomponentInstanceResolver),
	type: DeviceComponentSchema,
};
