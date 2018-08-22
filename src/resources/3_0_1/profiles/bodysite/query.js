// Schemas
const BodySiteSchema = require('../../schemas/bodysite.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const BodySiteArgs = require('../../parameters/bodysite.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	bodysiteResolver,
	bodysiteListResolver,
	bodysiteInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'BodySite',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.BodySiteQuery
 * @summary BodySite Query.
 */
module.exports.BodySiteQuery = {
	args: Object.assign({}, CommonArgs, BodySiteArgs),
	description: 'Query for a single BodySite',
	resolve: scopeInvariant(scopeOptions, bodysiteResolver),
	type: BodySiteSchema
};

/**
 * @name exports.BodySiteListQuery
 * @summary BodySiteList Query.
 */
module.exports.BodySiteListQuery = {
	args: Object.assign({}, CommonArgs, BodySiteArgs),
	description: 'Query for multiple BodySites',
	resolve: scopeInvariant(scopeOptions, bodysiteListResolver),
	type: BundleSchema
};

/**
 * @name exports.BodySiteInstanceQuery
 * @summary BodySiteInstance Query.
 */
module.exports.BodySiteInstanceQuery = {
	description: 'Get information about a single BodySite',
	resolve: scopeInvariant(scopeOptions, bodysiteInstanceResolver),
	type: BodySiteSchema
};
