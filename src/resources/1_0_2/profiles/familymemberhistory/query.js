// Schemas
const FamilyMemberHistorySchema = require('../../schemas/familymemberhistory.schema');

// Arguments
const FamilyMemberHistoryArgs = require('../../parameters/familymemberhistory.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	familymemberhistoryResolver,
	familymemberhistoryListResolver,
	familymemberhistoryInstanceResolver
} = require('./resolver');

/**
 * @name exports.FamilyMemberHistoryQuery
 * @summary FamilyMemberHistory Query.
 */
module.exports.FamilyMemberHistoryQuery = {
	args: Object.assign({}, CommonArgs, FamilyMemberHistoryArgs),
	description: 'Query for a single FamilyMemberHistory',
	resolve: familymemberhistoryResolver,
	type: FamilyMemberHistorySchema
};

/**
 * @name exports.FamilyMemberHistoryListQuery
 * @summary FamilyMemberHistoryList Query.
 */
module.exports.FamilyMemberHistoryListQuery = {
	args: Object.assign({}, CommonArgs, FamilyMemberHistoryArgs),
	description: 'Query for multiple FamilyMemberHistorys',
	resolve: familymemberhistoryListResolver,
	type: new GraphQLList(FamilyMemberHistorySchema)
};

/**
 * @name exports.FamilyMemberHistoryInstanceQuery
 * @summary FamilyMemberHistoryInstance Query.
 */
module.exports.FamilyMemberHistoryInstanceQuery = {
	description: 'Get information about a single FamilyMemberHistory',
	resolve: familymemberhistoryInstanceResolver,
	type: FamilyMemberHistorySchema
};
