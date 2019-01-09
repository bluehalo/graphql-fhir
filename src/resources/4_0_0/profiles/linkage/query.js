// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const LinkageSchema = require('../../schemas/linkage.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const LinkageArgs = require('../../parameters/linkage.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, LinkageArgs);

// Resolvers
const {
	getLinkage,
	getLinkageList,
	getLinkageInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Linkage',
	action: 'read',
};

/**
 * @name exports.LinkageQuery
 * @summary Linkage query.
 */
module.exports.LinkageQuery = {
	description: 'Query for a single Linkage',
	resolve: scopeInvariant(scopeOptions, getLinkage),
	type: LinkageSchema,
	args: args,
};

/**
 * @name exports.LinkageListQuery
 * @summary Linkage query.
 */
module.exports.LinkageListQuery = {
	description: 'Query for a more than or just one Linkage',
	resolve: scopeInvariant(scopeOptions, getLinkageList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.LinkageInstanceQuery
 * @summary Linkage query.
 */
module.exports.LinkageInstanceQuery = {
	description: 'Access information about a single Linkage',
	resolve: scopeInvariant(scopeOptions, getLinkageInstance),
	type: LinkageSchema,
	args: args,
};
