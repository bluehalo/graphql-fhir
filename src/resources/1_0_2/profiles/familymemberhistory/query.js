// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const FamilyMemberHistorySchema = require('../../schemas/familymemberhistory.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const FamilyMemberHistoryArgs = require('../../parameters/familymemberhistory.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, FamilyMemberHistoryArgs);

// Resolvers
const {
	getFamilyMemberHistory,
	getFamilyMemberHistoryList,
	getFamilyMemberHistoryInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'FamilyMemberHistory',
	action: 'read',
};

/**
 * @name exports.FamilyMemberHistoryQuery
 * @summary FamilyMemberHistory query.
 */
module.exports.FamilyMemberHistoryQuery = {
	description: 'Query for a single FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, getFamilyMemberHistory),
	type: FamilyMemberHistorySchema,
	args: args,
};

/**
 * @name exports.FamilyMemberHistoryListQuery
 * @summary FamilyMemberHistory query.
 */
module.exports.FamilyMemberHistoryListQuery = {
	description: 'Query for a more than or just one FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, getFamilyMemberHistoryList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.FamilyMemberHistoryInstanceQuery
 * @summary FamilyMemberHistory query.
 */
module.exports.FamilyMemberHistoryInstanceQuery = {
	description: 'Access information about a single FamilyMemberHistory',
	resolve: scopeInvariant(scopeOptions, getFamilyMemberHistoryInstance),
	type: FamilyMemberHistorySchema,
	args: args,
};
