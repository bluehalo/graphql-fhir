// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const DetectedIssueSchema = require('../../schemas/detectedissue.schema');

// Arguments
const DetectedIssueArgs = require('../../parameters/detectedissue.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	detectedissueResolver,
	detectedissueListResolver,
	detectedissueInstanceResolver
} = require('./resolver');

/**
 * @name exports.DetectedIssueQuery
 * @summary DetectedIssue Query.
 */
module.exports.DetectedIssueQuery = {
	args: Object.assign({}, CommonArgs, DetectedIssueArgs),
	description: 'Query for a single DetectedIssue',
	resolve: detectedissueResolver,
	type: DetectedIssueSchema
};

/**
 * @name exports.DetectedIssueListQuery
 * @summary DetectedIssueList Query.
 */
module.exports.DetectedIssueListQuery = {
	args: Object.assign({}, CommonArgs, DetectedIssueArgs),
	description: 'Query for multiple DetectedIssues',
	resolve: detectedissueListResolver,
	type: BundleSchema
};

/**
 * @name exports.DetectedIssueInstanceQuery
 * @summary DetectedIssueInstance Query.
 */
module.exports.DetectedIssueInstanceQuery = {
	description: 'Get information about a single DetectedIssue',
	resolve: detectedissueInstanceResolver,
	type: DetectedIssueSchema
};
