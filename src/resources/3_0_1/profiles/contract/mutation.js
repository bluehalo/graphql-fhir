// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ContractSchema = require('../../schemas/contract.schema');

// Inputs
const ContractInput = require('../../inputs/contract.input');

// Resolvers
const {
	contractCreateResolver,
	contractUpdateResolver,
	contractDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Contract',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Contract record.'
	},
	resource: {
		type: new GraphQLNonNull(ContractInput),
		description: 'Contract Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Contract record for deletion.'
	}
};

/**
 * @name exports.ContractCreateMutation
 * @summary ContractCreate Mutation.
 */
module.exports.ContractCreateMutation = {
	args: WriteArgs,
	description: 'Create a Contract',
	resolve: scopeInvariant(scopeOptions, contractCreateResolver),
	type: ContractSchema
};

/**
 * @name exports.ContractUpdateMutation
 * @summary ContractUpdate Mutation.
 */
module.exports.ContractUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Contracts',
	resolve: scopeInvariant(scopeOptions, contractUpdateResolver),
	type: ContractSchema
};

/**
 * @name exports.ContractDeleteMutation
 * @summary ContractDelete Mutation.
 */
module.exports.ContractDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Contract',
	resolve: scopeInvariant(scopeOptions, contractDeleteResolver),
	type: ContractSchema
};
