// Schemas
const PaymentReconciliationSchema = require('../../schemas/paymentreconciliation.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PaymentReconciliationArgs = require('../../parameters/paymentreconciliation.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	paymentreconciliationResolver,
	paymentreconciliationListResolver,
	paymentreconciliationInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PaymentReconciliation',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.PaymentReconciliationQuery
 * @summary PaymentReconciliation Query.
 */
module.exports.PaymentReconciliationQuery = {
	args: Object.assign({}, CommonArgs, PaymentReconciliationArgs),
	description: 'Query for a single PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, paymentreconciliationResolver),
	type: PaymentReconciliationSchema
};

/**
 * @name exports.PaymentReconciliationListQuery
 * @summary PaymentReconciliationList Query.
 */
module.exports.PaymentReconciliationListQuery = {
	args: Object.assign({}, CommonArgs, PaymentReconciliationArgs),
	description: 'Query for multiple PaymentReconciliations',
	resolve: scopeInvariant(scopeOptions, paymentreconciliationListResolver),
	type: BundleSchema
};

/**
 * @name exports.PaymentReconciliationInstanceQuery
 * @summary PaymentReconciliationInstance Query.
 */
module.exports.PaymentReconciliationInstanceQuery = {
	description: 'Get information about a single PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, paymentreconciliationInstanceResolver),
	type: PaymentReconciliationSchema
};
