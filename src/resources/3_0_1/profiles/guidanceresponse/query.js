// Schemas
const GuidanceResponseSchema = require('../../schemas/guidanceresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const GuidanceResponseArgs = require('../../parameters/guidanceresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	guidanceresponseResolver,
	guidanceresponseListResolver,
	guidanceresponseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'GuidanceResponse',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.GuidanceResponseQuery
 * @summary GuidanceResponse Query.
 */
module.exports.GuidanceResponseQuery = {
	args: Object.assign({}, CommonArgs, GuidanceResponseArgs),
	description: 'Query for a single GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, guidanceresponseResolver),
	type: GuidanceResponseSchema,
};

/**
 * @name exports.GuidanceResponseListQuery
 * @summary GuidanceResponseList Query.
 */
module.exports.GuidanceResponseListQuery = {
	args: Object.assign({}, CommonArgs, GuidanceResponseArgs),
	description: 'Query for multiple GuidanceResponses',
	resolve: scopeInvariant(scopeOptions, guidanceresponseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.GuidanceResponseInstanceQuery
 * @summary GuidanceResponseInstance Query.
 */
module.exports.GuidanceResponseInstanceQuery = {
	description: 'Get information about a single GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, guidanceresponseInstanceResolver),
	type: GuidanceResponseSchema,
};
