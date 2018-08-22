// Schemas
const ProcedureSchema = require('../../schemas/procedure.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ProcedureArgs = require('../../parameters/procedure.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	procedureResolver,
	procedureListResolver,
	procedureInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Procedure',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.ProcedureQuery
 * @summary Procedure Query.
 */
module.exports.ProcedureQuery = {
	args: Object.assign({}, CommonArgs, ProcedureArgs),
	description: 'Query for a single Procedure',
	resolve: scopeInvariant(scopeOptions, procedureResolver),
	type: ProcedureSchema
};

/**
 * @name exports.ProcedureListQuery
 * @summary ProcedureList Query.
 */
module.exports.ProcedureListQuery = {
	args: Object.assign({}, CommonArgs, ProcedureArgs),
	description: 'Query for multiple Procedures',
	resolve: scopeInvariant(scopeOptions, procedureListResolver),
	type: BundleSchema
};

/**
 * @name exports.ProcedureInstanceQuery
 * @summary ProcedureInstance Query.
 */
module.exports.ProcedureInstanceQuery = {
	description: 'Get information about a single Procedure',
	resolve: scopeInvariant(scopeOptions, procedureInstanceResolver),
	type: ProcedureSchema
};
