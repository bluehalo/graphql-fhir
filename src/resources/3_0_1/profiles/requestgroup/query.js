// Schemas
const RequestGroupSchema = require('../../schemas/requestgroup.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const RequestGroupArgs = require('../../parameters/requestgroup.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	requestgroupResolver,
	requestgroupListResolver,
	requestgroupInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'RequestGroup',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.RequestGroupQuery
 * @summary RequestGroup Query.
 */
module.exports.RequestGroupQuery = {
	args: Object.assign({}, CommonArgs, RequestGroupArgs),
	description: 'Query for a single RequestGroup',
	resolve: scopeInvariant(scopeOptions, requestgroupResolver),
	type: RequestGroupSchema
};

/**
 * @name exports.RequestGroupListQuery
 * @summary RequestGroupList Query.
 */
module.exports.RequestGroupListQuery = {
	args: Object.assign({}, CommonArgs, RequestGroupArgs),
	description: 'Query for multiple RequestGroups',
	resolve: scopeInvariant(scopeOptions, requestgroupListResolver),
	type: BundleSchema
};

/**
 * @name exports.RequestGroupInstanceQuery
 * @summary RequestGroupInstance Query.
 */
module.exports.RequestGroupInstanceQuery = {
	description: 'Get information about a single RequestGroup',
	resolve: scopeInvariant(scopeOptions, requestgroupInstanceResolver),
	type: RequestGroupSchema
};
