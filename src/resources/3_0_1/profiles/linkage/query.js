// Schemas
const LinkageSchema = require('../../schemas/linkage.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const LinkageArgs = require('../../parameters/linkage.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	linkageResolver,
	linkageListResolver,
	linkageInstanceResolver
} = require('./resolver');

/**
 * @name exports.LinkageQuery
 * @summary Linkage Query.
 */
module.exports.LinkageQuery = {
	args: Object.assign({}, CommonArgs, LinkageArgs),
	description: 'Query for a single Linkage',
	resolve: linkageResolver,
	type: LinkageSchema
};

/**
 * @name exports.LinkageListQuery
 * @summary LinkageList Query.
 */
module.exports.LinkageListQuery = {
	args: Object.assign({}, CommonArgs, LinkageArgs),
	description: 'Query for multiple Linkages',
	resolve: linkageListResolver,
	type: BundleSchema
};

/**
 * @name exports.LinkageInstanceQuery
 * @summary LinkageInstance Query.
 */
module.exports.LinkageInstanceQuery = {
	description: 'Get information about a single Linkage',
	resolve: linkageInstanceResolver,
	type: LinkageSchema
};
