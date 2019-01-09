// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const BodySiteSchema = require('../../schemas/bodysite.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const BodySiteArgs = require('../../parameters/bodysite.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, BodySiteArgs);

// Resolvers
const {
	getBodySite,
	getBodySiteList,
	getBodySiteInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'BodySite',
	action: 'read',
};

/**
 * @name exports.BodySiteQuery
 * @summary BodySite query.
 */
module.exports.BodySiteQuery = {
	description: 'Query for a single BodySite',
	resolve: scopeInvariant(scopeOptions, getBodySite),
	type: BodySiteSchema,
	args: args,
};

/**
 * @name exports.BodySiteListQuery
 * @summary BodySite query.
 */
module.exports.BodySiteListQuery = {
	description: 'Query for a more than or just one BodySite',
	resolve: scopeInvariant(scopeOptions, getBodySiteList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.BodySiteInstanceQuery
 * @summary BodySite query.
 */
module.exports.BodySiteInstanceQuery = {
	description: 'Access information about a single BodySite',
	resolve: scopeInvariant(scopeOptions, getBodySiteInstance),
	type: BodySiteSchema,
	args: args,
};
