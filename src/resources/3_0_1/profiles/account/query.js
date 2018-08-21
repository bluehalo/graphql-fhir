// Schemas
const AccountSchema = require('../../schemas/account.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AccountArgs = require('../../parameters/account.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	accountResolver,
	accountListResolver,
	accountInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Account',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.AccountQuery
 * @summary Account Query.
 */
module.exports.AccountQuery = {
	args: Object.assign({}, CommonArgs, AccountArgs),
	description: 'Query for a single Account',
	resolve: scopeInvariant(scopeOptions, accountResolver),
	type: AccountSchema
};

/**
 * @name exports.AccountListQuery
 * @summary AccountList Query.
 */
module.exports.AccountListQuery = {
	args: Object.assign({}, CommonArgs, AccountArgs),
	description: 'Query for multiple Accounts',
	resolve: scopeInvariant(scopeOptions, accountListResolver),
	type: BundleSchema
};

/**
 * @name exports.AccountInstanceQuery
 * @summary AccountInstance Query.
 */
module.exports.AccountInstanceQuery = {
	description: 'Get information about a single Account',
	resolve: scopeInvariant(scopeOptions, accountInstanceResolver),
	type: AccountSchema
};
