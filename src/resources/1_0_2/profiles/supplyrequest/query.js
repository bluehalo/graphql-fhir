// Schemas
const SupplyRequestSchema = require('../../schemas/supplyrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SupplyRequestArgs = require('../../parameters/supplyrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	supplyrequestResolver,
	supplyrequestListResolver,
	supplyrequestInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'SupplyRequest',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.SupplyRequestQuery
 * @summary SupplyRequest Query.
 */
module.exports.SupplyRequestQuery = {
	args: Object.assign({}, CommonArgs, SupplyRequestArgs),
	description: 'Query for a single SupplyRequest',
	resolve: scopeInvariant(scopeOptions, supplyrequestResolver),
	type: SupplyRequestSchema,
};

/**
 * @name exports.SupplyRequestListQuery
 * @summary SupplyRequestList Query.
 */
module.exports.SupplyRequestListQuery = {
	args: Object.assign({}, CommonArgs, SupplyRequestArgs),
	description: 'Query for multiple SupplyRequests',
	resolve: scopeInvariant(scopeOptions, supplyrequestListResolver),
	type: BundleSchema,
};

/**
 * @name exports.SupplyRequestInstanceQuery
 * @summary SupplyRequestInstance Query.
 */
module.exports.SupplyRequestInstanceQuery = {
	description: 'Get information about a single SupplyRequest',
	resolve: scopeInvariant(scopeOptions, supplyrequestInstanceResolver),
	type: SupplyRequestSchema,
};
