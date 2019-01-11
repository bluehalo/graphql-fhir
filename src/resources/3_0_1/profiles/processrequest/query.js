// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ProcessRequestSchema = require('../../schemas/processrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ProcessRequestArgs = require('../../parameters/processrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ProcessRequestArgs,
);

// Resolvers
const {
	getProcessRequest,
	getProcessRequestList,
	getProcessRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ProcessRequest',
	action: 'read',
};

/**
 * @name exports.ProcessRequestQuery
 * @summary ProcessRequest query.
 */
module.exports.ProcessRequestQuery = {
	description: 'Query for a single ProcessRequest',
	resolve: scopeInvariant(scopeOptions, getProcessRequest),
	type: ProcessRequestSchema,
	args: args,
};

/**
 * @name exports.ProcessRequestListQuery
 * @summary ProcessRequest query.
 */
module.exports.ProcessRequestListQuery = {
	description: 'Query for a more than or just one ProcessRequest',
	resolve: scopeInvariant(scopeOptions, getProcessRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ProcessRequestInstanceQuery
 * @summary ProcessRequest query.
 */
module.exports.ProcessRequestInstanceQuery = {
	description: 'Access information about a single ProcessRequest',
	resolve: scopeInvariant(scopeOptions, getProcessRequestInstance),
	type: ProcessRequestSchema,
	args: args,
};
