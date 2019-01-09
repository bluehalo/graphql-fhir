// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PaymentReconciliationSchema = require('../../schemas/paymentreconciliation.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PaymentReconciliationArgs = require('../../parameters/paymentreconciliation.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	PaymentReconciliationArgs,
);

// Resolvers
const {
	getPaymentReconciliation,
	getPaymentReconciliationList,
	getPaymentReconciliationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PaymentReconciliation',
	action: 'read',
};

/**
 * @name exports.PaymentReconciliationQuery
 * @summary PaymentReconciliation query.
 */
module.exports.PaymentReconciliationQuery = {
	description: 'Query for a single PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, getPaymentReconciliation),
	type: PaymentReconciliationSchema,
	args: args,
};

/**
 * @name exports.PaymentReconciliationListQuery
 * @summary PaymentReconciliation query.
 */
module.exports.PaymentReconciliationListQuery = {
	description: 'Query for a more than or just one PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, getPaymentReconciliationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PaymentReconciliationInstanceQuery
 * @summary PaymentReconciliation query.
 */
module.exports.PaymentReconciliationInstanceQuery = {
	description: 'Access information about a single PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, getPaymentReconciliationInstance),
	type: PaymentReconciliationSchema,
	args: args,
};
