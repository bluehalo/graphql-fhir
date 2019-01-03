// Schemas
const OrganizationSchema = require('../../schemas/organization.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const OrganizationArgs = require('../../parameters/organization.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	organizationResolver,
	organizationListResolver,
	organizationInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Organization',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.OrganizationQuery
 * @summary Organization Query.
 */
module.exports.OrganizationQuery = {
	args: Object.assign({}, CommonArgs, OrganizationArgs),
	description: 'Query for a single Organization',
	resolve: scopeInvariant(scopeOptions, organizationResolver),
	type: OrganizationSchema,
};

/**
 * @name exports.OrganizationListQuery
 * @summary OrganizationList Query.
 */
module.exports.OrganizationListQuery = {
	args: Object.assign({}, CommonArgs, OrganizationArgs),
	description: 'Query for multiple Organizations',
	resolve: scopeInvariant(scopeOptions, organizationListResolver),
	type: BundleSchema,
};

/**
 * @name exports.OrganizationInstanceQuery
 * @summary OrganizationInstance Query.
 */
module.exports.OrganizationInstanceQuery = {
	description: 'Get information about a single Organization',
	resolve: scopeInvariant(scopeOptions, organizationInstanceResolver),
	type: OrganizationSchema,
};
