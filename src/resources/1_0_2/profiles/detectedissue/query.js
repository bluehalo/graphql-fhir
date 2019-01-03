// Schemas
const DetectedIssueSchema = require('../../schemas/detectedissue.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DetectedIssueArgs = require('../../parameters/detectedissue.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	detectedissueResolver,
	detectedissueListResolver,
	detectedissueInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DetectedIssue',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.DetectedIssueQuery
 * @summary DetectedIssue Query.
 */
module.exports.DetectedIssueQuery = {
	args: Object.assign({}, CommonArgs, DetectedIssueArgs),
	description: 'Query for a single DetectedIssue',
	resolve: scopeInvariant(scopeOptions, detectedissueResolver),
	type: DetectedIssueSchema,
};

/**
 * @name exports.DetectedIssueListQuery
 * @summary DetectedIssueList Query.
 */
module.exports.DetectedIssueListQuery = {
	args: Object.assign({}, CommonArgs, DetectedIssueArgs),
	description: 'Query for multiple DetectedIssues',
	resolve: scopeInvariant(scopeOptions, detectedissueListResolver),
	type: BundleSchema,
};

/**
 * @name exports.DetectedIssueInstanceQuery
 * @summary DetectedIssueInstance Query.
 */
module.exports.DetectedIssueInstanceQuery = {
	description: 'Get information about a single DetectedIssue',
	resolve: scopeInvariant(scopeOptions, detectedissueInstanceResolver),
	type: DetectedIssueSchema,
};
