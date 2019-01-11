// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const OrganizationSchema = require('../../schemas/organization.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const OrganizationArgs = require('../../parameters/organization.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	OrganizationArgs,
);

// Resolvers
const {
	getOrganization,
	getOrganizationList,
	getOrganizationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Organization',
	action: 'read',
};

/**
 * @name exports.OrganizationQuery
 * @summary Organization query.
 */
module.exports.OrganizationQuery = {
	description: 'Query for a single Organization',
	resolve: scopeInvariant(scopeOptions, getOrganization),
	type: OrganizationSchema,
	args: args,
};

/**
 * @name exports.OrganizationListQuery
 * @summary Organization query.
 */
module.exports.OrganizationListQuery = {
	description: 'Query for a more than or just one Organization',
	resolve: scopeInvariant(scopeOptions, getOrganizationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.OrganizationInstanceQuery
 * @summary Organization query.
 */
module.exports.OrganizationInstanceQuery = {
	description: 'Access information about a single Organization',
	resolve: scopeInvariant(scopeOptions, getOrganizationInstance),
	type: OrganizationSchema,
	args: args,
};
