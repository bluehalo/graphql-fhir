// Schemas
const ProcessRequestSchema = require('../../schemas/processrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ProcessRequestArgs = require('../../parameters/processrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	processrequestResolver,
	processrequestListResolver,
	processrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.ProcessRequestQuery
 * @summary ProcessRequest Query.
 */
module.exports.ProcessRequestQuery = {
	args: Object.assign({}, CommonArgs, ProcessRequestArgs),
	description: 'Query for a single ProcessRequest',
	resolve: processrequestResolver,
	type: ProcessRequestSchema
};

/**
 * @name exports.ProcessRequestListQuery
 * @summary ProcessRequestList Query.
 */
module.exports.ProcessRequestListQuery = {
	args: Object.assign({}, CommonArgs, ProcessRequestArgs),
	description: 'Query for multiple ProcessRequests',
	resolve: processrequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.ProcessRequestInstanceQuery
 * @summary ProcessRequestInstance Query.
 */
module.exports.ProcessRequestInstanceQuery = {
	description: 'Get information about a single ProcessRequest',
	resolve: processrequestInstanceResolver,
	type: ProcessRequestSchema
};
