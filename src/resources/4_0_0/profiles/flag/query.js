// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const FlagSchema = require('../../schemas/flag.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const FlagArgs = require('../../parameters/flag.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, FlagArgs);

// Resolvers
const { getFlag, getFlagList, getFlagInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Flag',
	action: 'read',
};

/**
 * @name exports.FlagQuery
 * @summary Flag query.
 */
module.exports.FlagQuery = {
	description: 'Query for a single Flag',
	resolve: scopeInvariant(scopeOptions, getFlag),
	type: FlagSchema,
	args: args,
};

/**
 * @name exports.FlagListQuery
 * @summary Flag query.
 */
module.exports.FlagListQuery = {
	description: 'Query for a more than or just one Flag',
	resolve: scopeInvariant(scopeOptions, getFlagList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.FlagInstanceQuery
 * @summary Flag query.
 */
module.exports.FlagInstanceQuery = {
	description: 'Access information about a single Flag',
	resolve: scopeInvariant(scopeOptions, getFlagInstance),
	type: FlagSchema,
	args: args,
};
