// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SearchParameterSchema = require('../../schemas/searchparameter.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SearchParameterArgs = require('../../parameters/searchparameter.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	SearchParameterArgs,
);

// Resolvers
const {
	getSearchParameter,
	getSearchParameterList,
	getSearchParameterInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SearchParameter',
	action: 'read',
};

/**
 * @name exports.SearchParameterQuery
 * @summary SearchParameter query.
 */
module.exports.SearchParameterQuery = {
	description: 'Query for a single SearchParameter',
	resolve: scopeInvariant(scopeOptions, getSearchParameter),
	type: SearchParameterSchema,
	args: args,
};

/**
 * @name exports.SearchParameterListQuery
 * @summary SearchParameter query.
 */
module.exports.SearchParameterListQuery = {
	description: 'Query for a more than or just one SearchParameter',
	resolve: scopeInvariant(scopeOptions, getSearchParameterList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SearchParameterInstanceQuery
 * @summary SearchParameter query.
 */
module.exports.SearchParameterInstanceQuery = {
	description: 'Access information about a single SearchParameter',
	resolve: scopeInvariant(scopeOptions, getSearchParameterInstance),
	type: SearchParameterSchema,
	args: args,
};
