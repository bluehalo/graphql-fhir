// Schemas
const AccountSchema = require('../../schemas/account.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AccountArgs = require('../../parameters/account.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	accountResolver,
	accountListResolver,
	accountInstanceResolver
} = require('./resolver');

/**
 * @name exports.AccountQuery
 * @summary Account Query.
 */
module.exports.AccountQuery = {
	args: Object.assign({}, CommonArgs, AccountArgs),
	description: 'Query for a single Account',
	resolve: accountResolver,
	type: AccountSchema
};

/**
 * @name exports.AccountListQuery
 * @summary AccountList Query.
 */
module.exports.AccountListQuery = {
	args: Object.assign({}, CommonArgs, AccountArgs),
	description: 'Query for multiple Accounts',
	resolve: accountListResolver,
	type: BundleSchema
};

/**
 * @name exports.AccountInstanceQuery
 * @summary AccountInstance Query.
 */
module.exports.AccountInstanceQuery = {
	description: 'Get information about a single Account',
	resolve: accountInstanceResolver,
	type: AccountSchema
};
