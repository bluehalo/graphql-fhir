// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ExpansionProfileSchema = require('../../schemas/expansionprofile.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ExpansionProfileArgs = require('../../parameters/expansionprofile.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ExpansionProfileArgs,
);

// Resolvers
const {
	getExpansionProfile,
	getExpansionProfileList,
	getExpansionProfileInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ExpansionProfile',
	action: 'read',
};

/**
 * @name exports.ExpansionProfileQuery
 * @summary ExpansionProfile query.
 */
module.exports.ExpansionProfileQuery = {
	description: 'Query for a single ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, getExpansionProfile),
	type: ExpansionProfileSchema,
	args: args,
};

/**
 * @name exports.ExpansionProfileListQuery
 * @summary ExpansionProfile query.
 */
module.exports.ExpansionProfileListQuery = {
	description: 'Query for a more than or just one ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, getExpansionProfileList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ExpansionProfileInstanceQuery
 * @summary ExpansionProfile query.
 */
module.exports.ExpansionProfileInstanceQuery = {
	description: 'Access information about a single ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, getExpansionProfileInstance),
	type: ExpansionProfileSchema,
	args: args,
};
