// Schemas
const ProcedureRequestSchema = require('../../schemas/procedurerequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ProcedureRequestArgs = require('../../parameters/procedurerequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	procedurerequestResolver,
	procedurerequestListResolver,
	procedurerequestInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ProcedureRequest',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ProcedureRequestQuery
 * @summary ProcedureRequest Query.
 */
module.exports.ProcedureRequestQuery = {
	args: Object.assign({}, CommonArgs, ProcedureRequestArgs),
	description: 'Query for a single ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, procedurerequestResolver),
	type: ProcedureRequestSchema,
};

/**
 * @name exports.ProcedureRequestListQuery
 * @summary ProcedureRequestList Query.
 */
module.exports.ProcedureRequestListQuery = {
	args: Object.assign({}, CommonArgs, ProcedureRequestArgs),
	description: 'Query for multiple ProcedureRequests',
	resolve: scopeInvariant(scopeOptions, procedurerequestListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ProcedureRequestInstanceQuery
 * @summary ProcedureRequestInstance Query.
 */
module.exports.ProcedureRequestInstanceQuery = {
	description: 'Get information about a single ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, procedurerequestInstanceResolver),
	type: ProcedureRequestSchema,
};
