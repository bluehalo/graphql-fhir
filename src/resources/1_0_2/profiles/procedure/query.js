// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ProcedureSchema = require('../../schemas/procedure.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ProcedureArgs = require('../../parameters/procedure.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ProcedureArgs);

// Resolvers
const {
	getProcedure,
	getProcedureList,
	getProcedureInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Procedure',
	action: 'read',
};

/**
 * @name exports.ProcedureQuery
 * @summary Procedure query.
 */
module.exports.ProcedureQuery = {
	description: 'Query for a single Procedure',
	resolve: scopeInvariant(scopeOptions, getProcedure),
	type: ProcedureSchema,
	args: args,
};

/**
 * @name exports.ProcedureListQuery
 * @summary Procedure query.
 */
module.exports.ProcedureListQuery = {
	description: 'Query for a more than or just one Procedure',
	resolve: scopeInvariant(scopeOptions, getProcedureList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ProcedureInstanceQuery
 * @summary Procedure query.
 */
module.exports.ProcedureInstanceQuery = {
	description: 'Access information about a single Procedure',
	resolve: scopeInvariant(scopeOptions, getProcedureInstance),
	type: ProcedureSchema,
	args: args,
};
