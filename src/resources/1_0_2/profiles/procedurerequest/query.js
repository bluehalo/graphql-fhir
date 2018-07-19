// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ProcedureRequestSchema = require('../../schemas/procedurerequest.schema');

// Arguments
const ProcedureRequestArgs = require('../../parameters/procedurerequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	procedurerequestResolver,
	procedurerequestListResolver,
	procedurerequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.ProcedureRequestQuery
 * @summary ProcedureRequest Query.
 */
module.exports.ProcedureRequestQuery = {
	args: Object.assign({}, CommonArgs, ProcedureRequestArgs),
	description: 'Query for a single ProcedureRequest',
	resolve: procedurerequestResolver,
	type: ProcedureRequestSchema
};

/**
 * @name exports.ProcedureRequestListQuery
 * @summary ProcedureRequestList Query.
 */
module.exports.ProcedureRequestListQuery = {
	args: Object.assign({}, CommonArgs, ProcedureRequestArgs),
	description: 'Query for multiple ProcedureRequests',
	resolve: procedurerequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.ProcedureRequestInstanceQuery
 * @summary ProcedureRequestInstance Query.
 */
module.exports.ProcedureRequestInstanceQuery = {
	description: 'Get information about a single ProcedureRequest',
	resolve: procedurerequestInstanceResolver,
	type: ProcedureRequestSchema
};
