// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const TestReportSchema = require('../../schemas/testreport.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const TestReportArgs = require('../../parameters/testreport.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, TestReportArgs);

// Resolvers
const {
	getTestReport,
	getTestReportList,
	getTestReportInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'TestReport',
	action: 'read',
};

/**
 * @name exports.TestReportQuery
 * @summary TestReport query.
 */
module.exports.TestReportQuery = {
	description: 'Query for a single TestReport',
	resolve: scopeInvariant(scopeOptions, getTestReport),
	type: TestReportSchema,
	args: args,
};

/**
 * @name exports.TestReportListQuery
 * @summary TestReport query.
 */
module.exports.TestReportListQuery = {
	description: 'Query for a more than or just one TestReport',
	resolve: scopeInvariant(scopeOptions, getTestReportList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.TestReportInstanceQuery
 * @summary TestReport query.
 */
module.exports.TestReportInstanceQuery = {
	description: 'Access information about a single TestReport',
	resolve: scopeInvariant(scopeOptions, getTestReportInstance),
	type: TestReportSchema,
	args: args,
};
