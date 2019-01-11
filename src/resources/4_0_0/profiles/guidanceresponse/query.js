// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const GuidanceResponseSchema = require('../../schemas/guidanceresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const GuidanceResponseArgs = require('../../parameters/guidanceresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	GuidanceResponseArgs,
);

// Resolvers
const {
	getGuidanceResponse,
	getGuidanceResponseList,
	getGuidanceResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'GuidanceResponse',
	action: 'read',
};

/**
 * @name exports.GuidanceResponseQuery
 * @summary GuidanceResponse query.
 */
module.exports.GuidanceResponseQuery = {
	description: 'Query for a single GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, getGuidanceResponse),
	type: GuidanceResponseSchema,
	args: args,
};

/**
 * @name exports.GuidanceResponseListQuery
 * @summary GuidanceResponse query.
 */
module.exports.GuidanceResponseListQuery = {
	description: 'Query for a more than or just one GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, getGuidanceResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.GuidanceResponseInstanceQuery
 * @summary GuidanceResponse query.
 */
module.exports.GuidanceResponseInstanceQuery = {
	description: 'Access information about a single GuidanceResponse',
	resolve: scopeInvariant(scopeOptions, getGuidanceResponseInstance),
	type: GuidanceResponseSchema,
	args: args,
};
