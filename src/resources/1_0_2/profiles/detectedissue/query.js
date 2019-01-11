// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DetectedIssueSchema = require('../../schemas/detectedissue.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DetectedIssueArgs = require('../../parameters/detectedissue.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, DetectedIssueArgs);

// Resolvers
const {
	getDetectedIssue,
	getDetectedIssueList,
	getDetectedIssueInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DetectedIssue',
	action: 'read',
};

/**
 * @name exports.DetectedIssueQuery
 * @summary DetectedIssue query.
 */
module.exports.DetectedIssueQuery = {
	description: 'Query for a single DetectedIssue',
	resolve: scopeInvariant(scopeOptions, getDetectedIssue),
	type: DetectedIssueSchema,
	args: args,
};

/**
 * @name exports.DetectedIssueListQuery
 * @summary DetectedIssue query.
 */
module.exports.DetectedIssueListQuery = {
	description: 'Query for a more than or just one DetectedIssue',
	resolve: scopeInvariant(scopeOptions, getDetectedIssueList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DetectedIssueInstanceQuery
 * @summary DetectedIssue query.
 */
module.exports.DetectedIssueInstanceQuery = {
	description: 'Access information about a single DetectedIssue',
	resolve: scopeInvariant(scopeOptions, getDetectedIssueInstance),
	type: DetectedIssueSchema,
	args: args,
};
