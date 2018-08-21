// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AccountSchema = require('../../schemas/account.schema');

// Inputs
const AccountInput = require('../../inputs/account.input');

// Resolvers
const {
	accountCreateResolver,
	accountUpdateResolver,
	accountDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Account',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Account record.'
	},
	resource: {
		type: new GraphQLNonNull(AccountInput),
		description: 'Account Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Account record for deletion.'
	}
};

/**
 * @name exports.AccountCreateMutation
 * @summary AccountCreate Mutation.
 */
module.exports.AccountCreateMutation = {
	args: WriteArgs,
	description: 'Create a Account',
	resolve: scopeInvariant(scopeOptions, accountCreateResolver),
	type: AccountSchema
};

/**
 * @name exports.AccountUpdateMutation
 * @summary AccountUpdate Mutation.
 */
module.exports.AccountUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Accounts',
	resolve: scopeInvariant(scopeOptions, accountUpdateResolver),
	type: AccountSchema
};

/**
 * @name exports.AccountDeleteMutation
 * @summary AccountDelete Mutation.
 */
module.exports.AccountDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Account',
	resolve: scopeInvariant(scopeOptions, accountDeleteResolver),
	type: AccountSchema
};
