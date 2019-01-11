// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MeasureReportSchema = require('../../schemas/measurereport.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MeasureReportArgs = require('../../parameters/measurereport.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MeasureReportArgs,
);

// Resolvers
const {
	getMeasureReport,
	getMeasureReportList,
	getMeasureReportInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MeasureReport',
	action: 'read',
};

/**
 * @name exports.MeasureReportQuery
 * @summary MeasureReport query.
 */
module.exports.MeasureReportQuery = {
	description: 'Query for a single MeasureReport',
	resolve: scopeInvariant(scopeOptions, getMeasureReport),
	type: MeasureReportSchema,
	args: args,
};

/**
 * @name exports.MeasureReportListQuery
 * @summary MeasureReport query.
 */
module.exports.MeasureReportListQuery = {
	description: 'Query for a more than or just one MeasureReport',
	resolve: scopeInvariant(scopeOptions, getMeasureReportList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MeasureReportInstanceQuery
 * @summary MeasureReport query.
 */
module.exports.MeasureReportInstanceQuery = {
	description: 'Access information about a single MeasureReport',
	resolve: scopeInvariant(scopeOptions, getMeasureReportInstance),
	type: MeasureReportSchema,
	args: args,
};
