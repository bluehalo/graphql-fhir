// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ProcedureRequestSchema = require('../../schemas/procedurerequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ProcedureRequestArgs = require('../../parameters/procedurerequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ProcedureRequestArgs);

// Resolvers
const {
	getProcedureRequest,
	getProcedureRequestList,
	getProcedureRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ProcedureRequest',
	action: 'read',
};

/**
 * @name exports.ProcedureRequestQuery
 * @summary ProcedureRequest query.
 */
module.exports.ProcedureRequestQuery = {
	description: 'Query for a single ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, getProcedureRequest),
	type: ProcedureRequestSchema,
	args: args,
};

/**
 * @name exports.ProcedureRequestListQuery
 * @summary ProcedureRequest query.
 */
module.exports.ProcedureRequestListQuery = {
	description: 'Query for a more than or just one ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, getProcedureRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ProcedureRequestInstanceQuery
 * @summary ProcedureRequest query.
 */
module.exports.ProcedureRequestInstanceQuery = {
	description: 'Access information about a single ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, getProcedureRequestInstance),
	type: ProcedureRequestSchema,
	args: args,
};
