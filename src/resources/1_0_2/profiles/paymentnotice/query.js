// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PaymentNoticeSchema = require('../../schemas/paymentnotice.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PaymentNoticeArgs = require('../../parameters/paymentnotice.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, PaymentNoticeArgs);

// Resolvers
const {
	getPaymentNotice,
	getPaymentNoticeList,
	getPaymentNoticeInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PaymentNotice',
	action: 'read',
};

/**
 * @name exports.PaymentNoticeQuery
 * @summary PaymentNotice query.
 */
module.exports.PaymentNoticeQuery = {
	description: 'Query for a single PaymentNotice',
	resolve: scopeInvariant(scopeOptions, getPaymentNotice),
	type: PaymentNoticeSchema,
	args: args,
};

/**
 * @name exports.PaymentNoticeListQuery
 * @summary PaymentNotice query.
 */
module.exports.PaymentNoticeListQuery = {
	description: 'Query for a more than or just one PaymentNotice',
	resolve: scopeInvariant(scopeOptions, getPaymentNoticeList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PaymentNoticeInstanceQuery
 * @summary PaymentNotice query.
 */
module.exports.PaymentNoticeInstanceQuery = {
	description: 'Access information about a single PaymentNotice',
	resolve: scopeInvariant(scopeOptions, getPaymentNoticeInstance),
	type: PaymentNoticeSchema,
	args: args,
};
