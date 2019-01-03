// Schemas
const DiagnosticOrderSchema = require('../../schemas/diagnosticorder.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DiagnosticOrderArgs = require('../../parameters/diagnosticorder.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	diagnosticorderResolver,
	diagnosticorderListResolver,
	diagnosticorderInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DiagnosticOrder',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.DiagnosticOrderQuery
 * @summary DiagnosticOrder Query.
 */
module.exports.DiagnosticOrderQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticOrderArgs),
	description: 'Query for a single DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, diagnosticorderResolver),
	type: DiagnosticOrderSchema,
};

/**
 * @name exports.DiagnosticOrderListQuery
 * @summary DiagnosticOrderList Query.
 */
module.exports.DiagnosticOrderListQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticOrderArgs),
	description: 'Query for multiple DiagnosticOrders',
	resolve: scopeInvariant(scopeOptions, diagnosticorderListResolver),
	type: BundleSchema,
};

/**
 * @name exports.DiagnosticOrderInstanceQuery
 * @summary DiagnosticOrderInstance Query.
 */
module.exports.DiagnosticOrderInstanceQuery = {
	description: 'Get information about a single DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, diagnosticorderInstanceResolver),
	type: DiagnosticOrderSchema,
};
