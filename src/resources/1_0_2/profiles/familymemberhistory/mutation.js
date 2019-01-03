// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const FamilyMemberHistorySchema = require('../../schemas/familymemberhistory.schema');

// Inputs
const FamilyMemberHistoryInput = require('../../inputs/familymemberhistory.input');

// Resolvers
const {
	familymemberhistoryCreateResolver,
	familymemberhistoryUpdateResolver,
	familymemberhistoryDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'FamilyMemberHistory',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a FamilyMemberHistory record.',
	},
	resource: {
		type: new GraphQLNonNull(FamilyMemberHistoryInput),
		description: 'FamilyMemberHistory Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a FamilyMemberHistory record for deletion.',
	},
};

/**
 * @name exports.FamilyMemberHistoryCreateMutation
 * @summary FamilyMemberHistoryCreate Mutation.
 */
module.exports.FamilyMemberHistoryCreateMutation = {
	args: WriteArgs,
	description: 'Create a FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, familymemberhistoryCreateResolver),
	type: FamilyMemberHistorySchema,
};

/**
 * @name exports.FamilyMemberHistoryUpdateMutation
 * @summary FamilyMemberHistoryUpdate Mutation.
 */
module.exports.FamilyMemberHistoryUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple FamilyMemberHistorys',
	resolve: scopeInvariant(scopeOptions, familymemberhistoryUpdateResolver),
	type: FamilyMemberHistorySchema,
};

/**
 * @name exports.FamilyMemberHistoryDeleteMutation
 * @summary FamilyMemberHistoryDelete Mutation.
 */
module.exports.FamilyMemberHistoryDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, familymemberhistoryDeleteResolver),
	type: FamilyMemberHistorySchema,
};
