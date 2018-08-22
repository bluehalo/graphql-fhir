// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ClaimSchema = require('../../schemas/claim.schema');

// Inputs
const ClaimInput = require('../../inputs/claim.input');

// Resolvers
const {
	claimCreateResolver,
	claimUpdateResolver,
	claimDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Claim',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Claim record.'
	},
	resource: {
		type: new GraphQLNonNull(ClaimInput),
		description: 'Claim Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Claim record for deletion.'
	}
};

/**
 * @name exports.ClaimCreateMutation
 * @summary ClaimCreate Mutation.
 */
module.exports.ClaimCreateMutation = {
	args: WriteArgs,
	description: 'Create a Claim',
	resolve: scopeInvariant(scopeOptions, claimCreateResolver),
	type: ClaimSchema
};

/**
 * @name exports.ClaimUpdateMutation
 * @summary ClaimUpdate Mutation.
 */
module.exports.ClaimUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Claims',
	resolve: scopeInvariant(scopeOptions, claimUpdateResolver),
	type: ClaimSchema
};

/**
 * @name exports.ClaimDeleteMutation
 * @summary ClaimDelete Mutation.
 */
module.exports.ClaimDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Claim',
	resolve: scopeInvariant(scopeOptions, claimDeleteResolver),
	type: ClaimSchema
};
