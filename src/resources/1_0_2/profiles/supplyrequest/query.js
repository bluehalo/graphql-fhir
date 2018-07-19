// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const SupplyRequestSchema = require('../../schemas/supplyrequest.schema');

// Arguments
const SupplyRequestArgs = require('../../parameters/supplyrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	supplyrequestResolver,
	supplyrequestListResolver,
	supplyrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.SupplyRequestQuery
 * @summary SupplyRequest Query.
 */
module.exports.SupplyRequestQuery = {
	args: Object.assign({}, CommonArgs, SupplyRequestArgs),
	description: 'Query for a single SupplyRequest',
	resolve: supplyrequestResolver,
	type: SupplyRequestSchema
};

/**
 * @name exports.SupplyRequestListQuery
 * @summary SupplyRequestList Query.
 */
module.exports.SupplyRequestListQuery = {
	args: Object.assign({}, CommonArgs, SupplyRequestArgs),
	description: 'Query for multiple SupplyRequests',
	resolve: supplyrequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.SupplyRequestInstanceQuery
 * @summary SupplyRequestInstance Query.
 */
module.exports.SupplyRequestInstanceQuery = {
	description: 'Get information about a single SupplyRequest',
	resolve: supplyrequestInstanceResolver,
	type: SupplyRequestSchema
};
