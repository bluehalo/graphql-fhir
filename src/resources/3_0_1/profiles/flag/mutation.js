// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const FlagSchema = require('../../schemas/flag.schema');

// Inputs
const FlagInput = require('../../inputs/flag.input');

// Resolvers
const {
	flagCreateResolver,
	flagUpdateResolver,
	flagDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Flag',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Flag record.',
	},
	resource: {
		type: new GraphQLNonNull(FlagInput),
		description: 'Flag Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Flag record for deletion.',
	},
};

/**
 * @name exports.FlagCreateMutation
 * @summary FlagCreate Mutation.
 */
module.exports.FlagCreateMutation = {
	args: WriteArgs,
	description: 'Create a Flag',
	resolve: scopeInvariant(scopeOptions, flagCreateResolver),
	type: FlagSchema,
};

/**
 * @name exports.FlagUpdateMutation
 * @summary FlagUpdate Mutation.
 */
module.exports.FlagUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Flags',
	resolve: scopeInvariant(scopeOptions, flagUpdateResolver),
	type: FlagSchema,
};

/**
 * @name exports.FlagDeleteMutation
 * @summary FlagDelete Mutation.
 */
module.exports.FlagDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Flag',
	resolve: scopeInvariant(scopeOptions, flagDeleteResolver),
	type: FlagSchema,
};
