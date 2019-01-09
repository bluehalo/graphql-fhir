// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const LocationSchema = require('../../schemas/location.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const LocationArgs = require('../../parameters/location.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, LocationArgs);

// Resolvers
const {
	getLocation,
	getLocationList,
	getLocationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Location',
	action: 'read',
};

/**
 * @name exports.LocationQuery
 * @summary Location query.
 */
module.exports.LocationQuery = {
	description: 'Query for a single Location',
	resolve: scopeInvariant(scopeOptions, getLocation),
	type: LocationSchema,
	args: args,
};

/**
 * @name exports.LocationListQuery
 * @summary Location query.
 */
module.exports.LocationListQuery = {
	description: 'Query for a more than or just one Location',
	resolve: scopeInvariant(scopeOptions, getLocationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.LocationInstanceQuery
 * @summary Location query.
 */
module.exports.LocationInstanceQuery = {
	description: 'Access information about a single Location',
	resolve: scopeInvariant(scopeOptions, getLocationInstance),
	type: LocationSchema,
	args: args,
};
