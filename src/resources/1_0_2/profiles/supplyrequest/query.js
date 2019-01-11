// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SupplyRequestSchema = require('../../schemas/supplyrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SupplyRequestArgs = require('../../parameters/supplyrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, SupplyRequestArgs);

// Resolvers
const {
	getSupplyRequest,
	getSupplyRequestList,
	getSupplyRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SupplyRequest',
	action: 'read',
};

/**
 * @name exports.SupplyRequestQuery
 * @summary SupplyRequest query.
 */
module.exports.SupplyRequestQuery = {
	description: 'Query for a single SupplyRequest',
	resolve: scopeInvariant(scopeOptions, getSupplyRequest),
	type: SupplyRequestSchema,
	args: args,
};

/**
 * @name exports.SupplyRequestListQuery
 * @summary SupplyRequest query.
 */
module.exports.SupplyRequestListQuery = {
	description: 'Query for a more than or just one SupplyRequest',
	resolve: scopeInvariant(scopeOptions, getSupplyRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SupplyRequestInstanceQuery
 * @summary SupplyRequest query.
 */
module.exports.SupplyRequestInstanceQuery = {
	description: 'Access information about a single SupplyRequest',
	resolve: scopeInvariant(scopeOptions, getSupplyRequestInstance),
	type: SupplyRequestSchema,
	args: args,
};
