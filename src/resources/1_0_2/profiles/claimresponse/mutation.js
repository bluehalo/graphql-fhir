// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ClaimResponseSchema = require('../../schemas/claimresponse.schema');

// Inputs
const ClaimResponseInput = require('../../inputs/claimresponse.input');

// Resolvers
const {
	claimresponseCreateResolver,
	claimresponseUpdateResolver,
	claimresponseDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ClaimResponse',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ClaimResponse record.'
	},
	resource: {
		type: new GraphQLNonNull(ClaimResponseInput),
		description: 'ClaimResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ClaimResponse record for deletion.'
	}
};

/**
 * @name exports.ClaimResponseCreateMutation
 * @summary ClaimResponseCreate Mutation.
 */
module.exports.ClaimResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a ClaimResponse',
	resolve: scopeInvariant(scopeOptions, claimresponseCreateResolver),
	type: ClaimResponseSchema
};

/**
 * @name exports.ClaimResponseUpdateMutation
 * @summary ClaimResponseUpdate Mutation.
 */
module.exports.ClaimResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ClaimResponses',
	resolve: scopeInvariant(scopeOptions, claimresponseUpdateResolver),
	type: ClaimResponseSchema
};

/**
 * @name exports.ClaimResponseDeleteMutation
 * @summary ClaimResponseDelete Mutation.
 */
module.exports.ClaimResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ClaimResponse',
	resolve: scopeInvariant(scopeOptions, claimresponseDeleteResolver),
	type: ClaimResponseSchema
};
