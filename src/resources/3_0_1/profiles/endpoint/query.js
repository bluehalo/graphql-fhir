// Schemas
const EndpointSchema = require('../../schemas/endpoint.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EndpointArgs = require('../../parameters/endpoint.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	endpointResolver,
	endpointListResolver,
	endpointInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Endpoint',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.EndpointQuery
 * @summary Endpoint Query.
 */
module.exports.EndpointQuery = {
	args: Object.assign({}, CommonArgs, EndpointArgs),
	description: 'Query for a single Endpoint',
	resolve: scopeInvariant(scopeOptions, endpointResolver),
	type: EndpointSchema
};

/**
 * @name exports.EndpointListQuery
 * @summary EndpointList Query.
 */
module.exports.EndpointListQuery = {
	args: Object.assign({}, CommonArgs, EndpointArgs),
	description: 'Query for multiple Endpoints',
	resolve: scopeInvariant(scopeOptions, endpointListResolver),
	type: BundleSchema
};

/**
 * @name exports.EndpointInstanceQuery
 * @summary EndpointInstance Query.
 */
module.exports.EndpointInstanceQuery = {
	description: 'Get information about a single Endpoint',
	resolve: scopeInvariant(scopeOptions, endpointInstanceResolver),
	type: EndpointSchema
};
