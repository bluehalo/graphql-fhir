// Schemas
const GuidanceResponseSchema = require('../../schemas/guidanceresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const GuidanceResponseArgs = require('../../parameters/guidanceresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	guidanceresponseResolver,
	guidanceresponseListResolver,
	guidanceresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.GuidanceResponseQuery
 * @summary GuidanceResponse Query.
 */
module.exports.GuidanceResponseQuery = {
	args: Object.assign({}, CommonArgs, GuidanceResponseArgs),
	description: 'Query for a single GuidanceResponse',
	resolve: guidanceresponseResolver,
	type: GuidanceResponseSchema
};

/**
 * @name exports.GuidanceResponseListQuery
 * @summary GuidanceResponseList Query.
 */
module.exports.GuidanceResponseListQuery = {
	args: Object.assign({}, CommonArgs, GuidanceResponseArgs),
	description: 'Query for multiple GuidanceResponses',
	resolve: guidanceresponseListResolver,
	type: BundleSchema
};

/**
 * @name exports.GuidanceResponseInstanceQuery
 * @summary GuidanceResponseInstance Query.
 */
module.exports.GuidanceResponseInstanceQuery = {
	description: 'Get information about a single GuidanceResponse',
	resolve: guidanceresponseInstanceResolver,
	type: GuidanceResponseSchema
};
