// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const AccountSchema = require('../../schemas/account.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const AccountArgs = require('../../parameters/account.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, AccountArgs);

// Resolvers
const {
	getAccount,
	getAccountList,
	getAccountInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Account',
	action: 'read',
};

/**
 * @name exports.AccountQuery
 * @summary Account query.
 */
module.exports.AccountQuery = {
	description: 'Query for a single Account',
	resolve: scopeInvariant(scopeOptions, getAccount),
	type: AccountSchema,
	args: args,
};

/**
 * @name exports.AccountListQuery
 * @summary Account query.
 */
module.exports.AccountListQuery = {
	description: 'Query for a more than or just one Account',
	resolve: scopeInvariant(scopeOptions, getAccountList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.AccountInstanceQuery
 * @summary Account query.
 */
module.exports.AccountInstanceQuery = {
	description: 'Access information about a single Account',
	resolve: scopeInvariant(scopeOptions, getAccountInstance),
	type: AccountSchema,
	args: args,
};
