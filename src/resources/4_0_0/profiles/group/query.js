// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const GroupSchema = require('../../schemas/group.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const GroupArgs = require('../../parameters/group.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, GroupArgs);

// Resolvers
const { getGroup, getGroupList, getGroupInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Group',
	action: 'read',
};

/**
 * @name exports.GroupQuery
 * @summary Group query.
 */
module.exports.GroupQuery = {
	description: 'Query for a single Group',
	resolve: scopeInvariant(scopeOptions, getGroup),
	type: GroupSchema,
	args: args,
};

/**
 * @name exports.GroupListQuery
 * @summary Group query.
 */
module.exports.GroupListQuery = {
	description: 'Query for a more than or just one Group',
	resolve: scopeInvariant(scopeOptions, getGroupList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.GroupInstanceQuery
 * @summary Group query.
 */
module.exports.GroupInstanceQuery = {
	description: 'Access information about a single Group',
	resolve: scopeInvariant(scopeOptions, getGroupInstance),
	type: GroupSchema,
	args: args,
};
