// Schemas
const LinkageSchema = require('../../schemas/linkage.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const LinkageArgs = require('../../parameters/linkage.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	linkageResolver,
	linkageListResolver,
	linkageInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Linkage',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.LinkageQuery
 * @summary Linkage Query.
 */
module.exports.LinkageQuery = {
	args: Object.assign({}, CommonArgs, LinkageArgs),
	description: 'Query for a single Linkage',
	resolve: scopeInvariant(scopeOptions, linkageResolver),
	type: LinkageSchema
};

/**
 * @name exports.LinkageListQuery
 * @summary LinkageList Query.
 */
module.exports.LinkageListQuery = {
	args: Object.assign({}, CommonArgs, LinkageArgs),
	description: 'Query for multiple Linkages',
	resolve: scopeInvariant(scopeOptions, linkageListResolver),
	type: BundleSchema
};

/**
 * @name exports.LinkageInstanceQuery
 * @summary LinkageInstance Query.
 */
module.exports.LinkageInstanceQuery = {
	description: 'Get information about a single Linkage',
	resolve: scopeInvariant(scopeOptions, linkageInstanceResolver),
	type: LinkageSchema
};
