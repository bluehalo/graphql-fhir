// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const BodySiteSchema = require('../../schemas/bodysite.schema');

// Arguments
const BodySiteArgs = require('../../parameters/bodysite.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	bodysiteResolver,
	bodysiteListResolver,
	bodysiteInstanceResolver
} = require('./resolver');

/**
 * @name exports.BodySiteQuery
 * @summary BodySite Query.
 */
module.exports.BodySiteQuery = {
	args: Object.assign({}, CommonArgs, BodySiteArgs),
	description: 'Query for a single BodySite',
	resolve: bodysiteResolver,
	type: BodySiteSchema
};

/**
 * @name exports.BodySiteListQuery
 * @summary BodySiteList Query.
 */
module.exports.BodySiteListQuery = {
	args: Object.assign({}, CommonArgs, BodySiteArgs),
	description: 'Query for multiple BodySites',
	resolve: bodysiteListResolver,
	type: BundleSchema
};

/**
 * @name exports.BodySiteInstanceQuery
 * @summary BodySiteInstance Query.
 */
module.exports.BodySiteInstanceQuery = {
	description: 'Get information about a single BodySite',
	resolve: bodysiteInstanceResolver,
	type: BodySiteSchema
};
