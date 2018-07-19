// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const LocationSchema = require('../../schemas/location.schema');

// Arguments
const LocationArgs = require('../../parameters/location.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	locationResolver,
	locationListResolver,
	locationInstanceResolver
} = require('./resolver');

/**
 * @name exports.LocationQuery
 * @summary Location Query.
 */
module.exports.LocationQuery = {
	args: Object.assign({}, CommonArgs, LocationArgs),
	description: 'Query for a single Location',
	resolve: locationResolver,
	type: LocationSchema
};

/**
 * @name exports.LocationListQuery
 * @summary LocationList Query.
 */
module.exports.LocationListQuery = {
	args: Object.assign({}, CommonArgs, LocationArgs),
	description: 'Query for multiple Locations',
	resolve: locationListResolver,
	type: BundleSchema
};

/**
 * @name exports.LocationInstanceQuery
 * @summary LocationInstance Query.
 */
module.exports.LocationInstanceQuery = {
	description: 'Get information about a single Location',
	resolve: locationInstanceResolver,
	type: LocationSchema
};
