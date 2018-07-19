// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const OrganizationSchema = require('../../schemas/organization.schema');

// Arguments
const OrganizationArgs = require('../../parameters/organization.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	organizationResolver,
	organizationListResolver,
	organizationInstanceResolver
} = require('./resolver');

/**
 * @name exports.OrganizationQuery
 * @summary Organization Query.
 */
module.exports.OrganizationQuery = {
	args: Object.assign({}, CommonArgs, OrganizationArgs),
	description: 'Query for a single Organization',
	resolve: organizationResolver,
	type: OrganizationSchema
};

/**
 * @name exports.OrganizationListQuery
 * @summary OrganizationList Query.
 */
module.exports.OrganizationListQuery = {
	args: Object.assign({}, CommonArgs, OrganizationArgs),
	description: 'Query for multiple Organizations',
	resolve: organizationListResolver,
	type: BundleSchema
};

/**
 * @name exports.OrganizationInstanceQuery
 * @summary OrganizationInstance Query.
 */
module.exports.OrganizationInstanceQuery = {
	description: 'Get information about a single Organization',
	resolve: organizationInstanceResolver,
	type: OrganizationSchema
};
