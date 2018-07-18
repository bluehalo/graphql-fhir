// Schemas
const PaymentReconciliationSchema = require('../../schemas/paymentreconciliation.schema');

// Arguments
const PaymentReconciliationArgs = require('../../parameters/paymentreconciliation.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	paymentreconciliationResolver,
	paymentreconciliationListResolver,
	paymentreconciliationInstanceResolver
} = require('./resolver');

/**
 * @name exports.PaymentReconciliationQuery
 * @summary PaymentReconciliation Query.
 */
module.exports.PaymentReconciliationQuery = {
	args: Object.assign({}, CommonArgs, PaymentReconciliationArgs),
	description: 'Query for a single PaymentReconciliation',
	resolve: paymentreconciliationResolver,
	type: PaymentReconciliationSchema
};

/**
 * @name exports.PaymentReconciliationListQuery
 * @summary PaymentReconciliationList Query.
 */
module.exports.PaymentReconciliationListQuery = {
	args: Object.assign({}, CommonArgs, PaymentReconciliationArgs),
	description: 'Query for multiple PaymentReconciliations',
	resolve: paymentreconciliationListResolver,
	type: new GraphQLList(PaymentReconciliationSchema)
};

/**
 * @name exports.PaymentReconciliationInstanceQuery
 * @summary PaymentReconciliationInstance Query.
 */
module.exports.PaymentReconciliationInstanceQuery = {
	description: 'Get information about a single PaymentReconciliation',
	resolve: paymentreconciliationInstanceResolver,
	type: PaymentReconciliationSchema
};
