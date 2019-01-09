// Schemas
const AccountSchema = require('../../schemas/account.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const AccountInput = require('../../inputs/account.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createAccount, updateAccount, removeAccount } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Account',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Account record.',
	},
	resource: {
		type: new GraphQLNonNull(AccountInput),
		description: 'Account Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Account record for deletion.',
	},
};

/**
 * @name exports.AccountCreateMutation
 * @summary AccountCreate mutation.
 */
module.exports.AccountCreateMutation = {
	description: 'Create a Account record',
	resolve: scopeInvariant(scopeOptions, createAccount),
	type: AccountSchema,
	args: WriteArgs,
};

/**
 * @name exports.AccountUpdateMutation
 * @summary AccountUpdate mutation.
 */
module.exports.AccountUpdateMutation = {
	description: 'Update a Account record',
	resolve: scopeInvariant(scopeOptions, updateAccount),
	type: AccountSchema,
	args: WriteArgs,
};

/**
 * @name exports.AccountRemoveMutation
 * @summary AccountRemove mutation.
 */
module.exports.AccountRemoveMutation = {
	description: 'Remove a Account record',
	resolve: scopeInvariant(scopeOptions, removeAccount),
	type: AccountSchema,
	args: DeleteArgs,
};
