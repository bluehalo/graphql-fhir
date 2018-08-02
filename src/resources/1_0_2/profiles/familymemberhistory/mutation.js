// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const FamilyMemberHistorySchema = require('../../schemas/familymemberhistory.schema');

// Inputs
const FamilyMemberHistoryInput = require('../../inputs/familymemberhistory.input');


const {
	familymemberhistoryCreateResolver,
	familymemberhistoryUpdateResolver,
	familymemberhistoryDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a FamilyMemberHistory record.'
	},
	resource: {
		type: FamilyMemberHistoryInput,
		description: 'FamilyMemberHistory Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a FamilyMemberHistory record for deletion.'
	}
};

/**
 * @name exports.FamilyMemberHistoryCreateMutation
 * @summary FamilyMemberHistoryCreate Mutation.
 */
module.exports.FamilyMemberHistoryCreateMutation = {
	args: WriteArgs,
	description: 'Create a FamilyMemberHistory',
	resolve: familymemberhistoryCreateResolver,
	type: FamilyMemberHistorySchema
};

/**
 * @name exports.FamilyMemberHistoryUpdateMutation
 * @summary FamilyMemberHistoryUpdate Mutation.
 */
module.exports.FamilyMemberHistoryUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple FamilyMemberHistorys',
	resolve: familymemberhistoryUpdateResolver,
	type: FamilyMemberHistorySchema
};

/**
 * @name exports.FamilyMemberHistoryDeleteMutation
 * @summary FamilyMemberHistoryDelete Mutation.
 */
module.exports.FamilyMemberHistoryDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single FamilyMemberHistory',
	resolve: familymemberhistoryDeleteResolver,
	type: FamilyMemberHistorySchema
};
