// Schemas
const ProcessRequestSchema = require('../../schemas/processrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ProcessRequestArgs = require('../../parameters/processrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	processrequestResolver,
	processrequestListResolver,
	processrequestInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ProcessRequest',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.ProcessRequestQuery
 * @summary ProcessRequest Query.
 */
module.exports.ProcessRequestQuery = {
	args: Object.assign({}, CommonArgs, ProcessRequestArgs),
	description: 'Query for a single ProcessRequest',
	resolve: scopeInvariant(scopeOptions, processrequestResolver),
	type: ProcessRequestSchema
};

/**
 * @name exports.ProcessRequestListQuery
 * @summary ProcessRequestList Query.
 */
module.exports.ProcessRequestListQuery = {
	args: Object.assign({}, CommonArgs, ProcessRequestArgs),
	description: 'Query for multiple ProcessRequests',
	resolve: scopeInvariant(scopeOptions, processrequestListResolver),
	type: BundleSchema
};

/**
 * @name exports.ProcessRequestInstanceQuery
 * @summary ProcessRequestInstance Query.
 */
module.exports.ProcessRequestInstanceQuery = {
	description: 'Get information about a single ProcessRequest',
	resolve: scopeInvariant(scopeOptions, processrequestInstanceResolver),
	type: ProcessRequestSchema
};
