// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const OrganizationAffiliationSchema = require('../../schemas/organizationaffiliation.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const OrganizationAffiliationArgs = require('../../parameters/organizationaffiliation.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	OrganizationAffiliationArgs,
);

// Resolvers
const {
	getOrganizationAffiliation,
	getOrganizationAffiliationList,
	getOrganizationAffiliationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'OrganizationAffiliation',
	action: 'read',
};

/**
 * @name exports.OrganizationAffiliationQuery
 * @summary OrganizationAffiliation query.
 */
module.exports.OrganizationAffiliationQuery = {
	description: 'Query for a single OrganizationAffiliation',
	resolve: scopeInvariant(scopeOptions, getOrganizationAffiliation),
	type: OrganizationAffiliationSchema,
	args: args,
};

/**
 * @name exports.OrganizationAffiliationListQuery
 * @summary OrganizationAffiliation query.
 */
module.exports.OrganizationAffiliationListQuery = {
	description: 'Query for a more than or just one OrganizationAffiliation',
	resolve: scopeInvariant(scopeOptions, getOrganizationAffiliationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.OrganizationAffiliationInstanceQuery
 * @summary OrganizationAffiliation query.
 */
module.exports.OrganizationAffiliationInstanceQuery = {
	description: 'Access information about a single OrganizationAffiliation',
	resolve: scopeInvariant(scopeOptions, getOrganizationAffiliationInstance),
	type: OrganizationAffiliationSchema,
	args: args,
};
