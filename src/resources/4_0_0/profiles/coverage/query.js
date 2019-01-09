// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CoverageSchema = require('../../schemas/coverage.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CoverageArgs = require('../../parameters/coverage.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, CoverageArgs);

// Resolvers
const {
	getCoverage,
	getCoverageList,
	getCoverageInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Coverage',
	action: 'read',
};

/**
 * @name exports.CoverageQuery
 * @summary Coverage query.
 */
module.exports.CoverageQuery = {
	description: 'Query for a single Coverage',
	resolve: scopeInvariant(scopeOptions, getCoverage),
	type: CoverageSchema,
	args: args,
};

/**
 * @name exports.CoverageListQuery
 * @summary Coverage query.
 */
module.exports.CoverageListQuery = {
	description: 'Query for a more than or just one Coverage',
	resolve: scopeInvariant(scopeOptions, getCoverageList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CoverageInstanceQuery
 * @summary Coverage query.
 */
module.exports.CoverageInstanceQuery = {
	description: 'Access information about a single Coverage',
	resolve: scopeInvariant(scopeOptions, getCoverageInstance),
	type: CoverageSchema,
	args: args,
};
