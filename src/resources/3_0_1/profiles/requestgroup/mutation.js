// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const RequestGroupSchema = require('../../schemas/requestgroup.schema');

// Inputs
const RequestGroupInput = require('../../inputs/requestgroup.input');

// Resolvers
const {
	requestgroupCreateResolver,
	requestgroupUpdateResolver,
	requestgroupDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'RequestGroup',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a RequestGroup record.'
	},
	resource: {
		type: new GraphQLNonNull(RequestGroupInput),
		description: 'RequestGroup Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a RequestGroup record for deletion.'
	}
};

/**
 * @name exports.RequestGroupCreateMutation
 * @summary RequestGroupCreate Mutation.
 */
module.exports.RequestGroupCreateMutation = {
	args: WriteArgs,
	description: 'Create a RequestGroup',
	resolve: scopeInvariant(scopeOptions, requestgroupCreateResolver),
	type: RequestGroupSchema
};

/**
 * @name exports.RequestGroupUpdateMutation
 * @summary RequestGroupUpdate Mutation.
 */
module.exports.RequestGroupUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple RequestGroups',
	resolve: scopeInvariant(scopeOptions, requestgroupUpdateResolver),
	type: RequestGroupSchema
};

/**
 * @name exports.RequestGroupDeleteMutation
 * @summary RequestGroupDelete Mutation.
 */
module.exports.RequestGroupDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single RequestGroup',
	resolve: scopeInvariant(scopeOptions, requestgroupDeleteResolver),
	type: RequestGroupSchema
};
