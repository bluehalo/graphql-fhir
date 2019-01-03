// Schemas
const ProcessResponseSchema = require('../../schemas/processresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ProcessResponseArgs = require('../../parameters/processresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	processresponseResolver,
	processresponseListResolver,
	processresponseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ProcessResponse',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ProcessResponseQuery
 * @summary ProcessResponse Query.
 */
module.exports.ProcessResponseQuery = {
	args: Object.assign({}, CommonArgs, ProcessResponseArgs),
	description: 'Query for a single ProcessResponse',
	resolve: scopeInvariant(scopeOptions, processresponseResolver),
	type: ProcessResponseSchema,
};

/**
 * @name exports.ProcessResponseListQuery
 * @summary ProcessResponseList Query.
 */
module.exports.ProcessResponseListQuery = {
	args: Object.assign({}, CommonArgs, ProcessResponseArgs),
	description: 'Query for multiple ProcessResponses',
	resolve: scopeInvariant(scopeOptions, processresponseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ProcessResponseInstanceQuery
 * @summary ProcessResponseInstance Query.
 */
module.exports.ProcessResponseInstanceQuery = {
	description: 'Get information about a single ProcessResponse',
	resolve: scopeInvariant(scopeOptions, processresponseInstanceResolver),
	type: ProcessResponseSchema,
};
