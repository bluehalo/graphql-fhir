// Schemas
const FamilyMemberHistorySchema = require('../../schemas/familymemberhistory.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const FamilyMemberHistoryArgs = require('../../parameters/familymemberhistory.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	familymemberhistoryResolver,
	familymemberhistoryListResolver,
	familymemberhistoryInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'FamilyMemberHistory',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.FamilyMemberHistoryQuery
 * @summary FamilyMemberHistory Query.
 */
module.exports.FamilyMemberHistoryQuery = {
	args: Object.assign({}, CommonArgs, FamilyMemberHistoryArgs),
	description: 'Query for a single FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, familymemberhistoryResolver),
	type: FamilyMemberHistorySchema,
};

/**
 * @name exports.FamilyMemberHistoryListQuery
 * @summary FamilyMemberHistoryList Query.
 */
module.exports.FamilyMemberHistoryListQuery = {
	args: Object.assign({}, CommonArgs, FamilyMemberHistoryArgs),
	description: 'Query for multiple FamilyMemberHistorys',
	resolve: scopeInvariant(scopeOptions, familymemberhistoryListResolver),
	type: BundleSchema,
};

/**
 * @name exports.FamilyMemberHistoryInstanceQuery
 * @summary FamilyMemberHistoryInstance Query.
 */
module.exports.FamilyMemberHistoryInstanceQuery = {
	description: 'Get information about a single FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, familymemberhistoryInstanceResolver),
	type: FamilyMemberHistorySchema,
};
