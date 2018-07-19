// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const DiagnosticOrderSchema = require('../../schemas/diagnosticorder.schema');

// Arguments
const DiagnosticOrderArgs = require('../../parameters/diagnosticorder.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	diagnosticorderResolver,
	diagnosticorderListResolver,
	diagnosticorderInstanceResolver
} = require('./resolver');

/**
 * @name exports.DiagnosticOrderQuery
 * @summary DiagnosticOrder Query.
 */
module.exports.DiagnosticOrderQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticOrderArgs),
	description: 'Query for a single DiagnosticOrder',
	resolve: diagnosticorderResolver,
	type: DiagnosticOrderSchema
};

/**
 * @name exports.DiagnosticOrderListQuery
 * @summary DiagnosticOrderList Query.
 */
module.exports.DiagnosticOrderListQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticOrderArgs),
	description: 'Query for multiple DiagnosticOrders',
	resolve: diagnosticorderListResolver,
	type: BundleSchema
};

/**
 * @name exports.DiagnosticOrderInstanceQuery
 * @summary DiagnosticOrderInstance Query.
 */
module.exports.DiagnosticOrderInstanceQuery = {
	description: 'Get information about a single DiagnosticOrder',
	resolve: diagnosticorderInstanceResolver,
	type: DiagnosticOrderSchema
};
