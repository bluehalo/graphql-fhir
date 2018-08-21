// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const GuidanceResponseSchema = require('../../schemas/guidanceresponse.schema');

// Inputs
const GuidanceResponseInput = require('../../inputs/guidanceresponse.input');

// Resolvers
const {
	guidanceresponseCreateResolver,
	guidanceresponseUpdateResolver,
	guidanceresponseDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'GuidanceResponse',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a GuidanceResponse record.'
	},
	resource: {
		type: new GraphQLNonNull(GuidanceResponseInput),
		description: 'GuidanceResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a GuidanceResponse record for deletion.'
	}
};

/**
 * @name exports.GuidanceResponseCreateMutation
 * @summary GuidanceResponseCreate Mutation.
 */
module.exports.GuidanceResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, guidanceresponseCreateResolver),
	type: GuidanceResponseSchema
};

/**
 * @name exports.GuidanceResponseUpdateMutation
 * @summary GuidanceResponseUpdate Mutation.
 */
module.exports.GuidanceResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple GuidanceResponses',
	resolve: scopeInvariant(scopeOptions, guidanceresponseUpdateResolver),
	type: GuidanceResponseSchema
};

/**
 * @name exports.GuidanceResponseDeleteMutation
 * @summary GuidanceResponseDelete Mutation.
 */
module.exports.GuidanceResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, guidanceresponseDeleteResolver),
	type: GuidanceResponseSchema
};
