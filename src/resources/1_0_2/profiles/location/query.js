// Schemas
const LocationSchema = require('../../schemas/location.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const LocationArgs = require('../../parameters/location.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	locationResolver,
	locationListResolver,
	locationInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Location',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.LocationQuery
 * @summary Location Query.
 */
module.exports.LocationQuery = {
	args: Object.assign({}, CommonArgs, LocationArgs),
	description: 'Query for a single Location',
	resolve: scopeInvariant(scopeOptions, locationResolver),
	type: LocationSchema,
};

/**
 * @name exports.LocationListQuery
 * @summary LocationList Query.
 */
module.exports.LocationListQuery = {
	args: Object.assign({}, CommonArgs, LocationArgs),
	description: 'Query for multiple Locations',
	resolve: scopeInvariant(scopeOptions, locationListResolver),
	type: BundleSchema,
};

/**
 * @name exports.LocationInstanceQuery
 * @summary LocationInstance Query.
 */
module.exports.LocationInstanceQuery = {
	description: 'Get information about a single Location',
	resolve: scopeInvariant(scopeOptions, locationInstanceResolver),
	type: LocationSchema,
};
