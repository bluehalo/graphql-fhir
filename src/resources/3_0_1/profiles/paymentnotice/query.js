// Schemas
const PaymentNoticeSchema = require('../../schemas/paymentnotice.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PaymentNoticeArgs = require('../../parameters/paymentnotice.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	paymentnoticeResolver,
	paymentnoticeListResolver,
	paymentnoticeInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PaymentNotice',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.PaymentNoticeQuery
 * @summary PaymentNotice Query.
 */
module.exports.PaymentNoticeQuery = {
	args: Object.assign({}, CommonArgs, PaymentNoticeArgs),
	description: 'Query for a single PaymentNotice',
	resolve: scopeInvariant(scopeOptions, paymentnoticeResolver),
	type: PaymentNoticeSchema,
};

/**
 * @name exports.PaymentNoticeListQuery
 * @summary PaymentNoticeList Query.
 */
module.exports.PaymentNoticeListQuery = {
	args: Object.assign({}, CommonArgs, PaymentNoticeArgs),
	description: 'Query for multiple PaymentNotices',
	resolve: scopeInvariant(scopeOptions, paymentnoticeListResolver),
	type: BundleSchema,
};

/**
 * @name exports.PaymentNoticeInstanceQuery
 * @summary PaymentNoticeInstance Query.
 */
module.exports.PaymentNoticeInstanceQuery = {
	description: 'Get information about a single PaymentNotice',
	resolve: scopeInvariant(scopeOptions, paymentnoticeInstanceResolver),
	type: PaymentNoticeSchema,
};
