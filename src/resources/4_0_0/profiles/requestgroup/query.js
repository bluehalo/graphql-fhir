// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const RequestGroupSchema = require('../../schemas/requestgroup.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const RequestGroupArgs = require('../../parameters/requestgroup.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	RequestGroupArgs,
);

// Resolvers
const {
	getRequestGroup,
	getRequestGroupList,
	getRequestGroupInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RequestGroup',
	action: 'read',
};

/**
 * @name exports.RequestGroupQuery
 * @summary RequestGroup query.
 */
module.exports.RequestGroupQuery = {
	description: 'Query for a single RequestGroup',
	resolve: scopeInvariant(scopeOptions, getRequestGroup),
	type: RequestGroupSchema,
	args: args,
};

/**
 * @name exports.RequestGroupListQuery
 * @summary RequestGroup query.
 */
module.exports.RequestGroupListQuery = {
	description: 'Query for a more than or just one RequestGroup',
	resolve: scopeInvariant(scopeOptions, getRequestGroupList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.RequestGroupInstanceQuery
 * @summary RequestGroup query.
 */
module.exports.RequestGroupInstanceQuery = {
	description: 'Access information about a single RequestGroup',
	resolve: scopeInvariant(scopeOptions, getRequestGroupInstance),
	type: RequestGroupSchema,
	args: args,
};
