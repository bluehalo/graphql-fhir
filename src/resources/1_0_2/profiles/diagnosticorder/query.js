// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DiagnosticOrderSchema = require('../../schemas/diagnosticorder.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DiagnosticOrderArgs = require('../../parameters/diagnosticorder.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, DiagnosticOrderArgs);

// Resolvers
const {
	getDiagnosticOrder,
	getDiagnosticOrderList,
	getDiagnosticOrderInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DiagnosticOrder',
	action: 'read',
};

/**
 * @name exports.DiagnosticOrderQuery
 * @summary DiagnosticOrder query.
 */
module.exports.DiagnosticOrderQuery = {
	description: 'Query for a single DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, getDiagnosticOrder),
	type: DiagnosticOrderSchema,
	args: args,
};

/**
 * @name exports.DiagnosticOrderListQuery
 * @summary DiagnosticOrder query.
 */
module.exports.DiagnosticOrderListQuery = {
	description: 'Query for a more than or just one DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, getDiagnosticOrderList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DiagnosticOrderInstanceQuery
 * @summary DiagnosticOrder query.
 */
module.exports.DiagnosticOrderInstanceQuery = {
	description: 'Access information about a single DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, getDiagnosticOrderInstance),
	type: DiagnosticOrderSchema,
	args: args,
};
