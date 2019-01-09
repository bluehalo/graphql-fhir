// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SupplyDeliverySchema = require('../../schemas/supplydelivery.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SupplyDeliveryArgs = require('../../parameters/supplydelivery.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	SupplyDeliveryArgs,
);

// Resolvers
const {
	getSupplyDelivery,
	getSupplyDeliveryList,
	getSupplyDeliveryInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SupplyDelivery',
	action: 'read',
};

/**
 * @name exports.SupplyDeliveryQuery
 * @summary SupplyDelivery query.
 */
module.exports.SupplyDeliveryQuery = {
	description: 'Query for a single SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, getSupplyDelivery),
	type: SupplyDeliverySchema,
	args: args,
};

/**
 * @name exports.SupplyDeliveryListQuery
 * @summary SupplyDelivery query.
 */
module.exports.SupplyDeliveryListQuery = {
	description: 'Query for a more than or just one SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, getSupplyDeliveryList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SupplyDeliveryInstanceQuery
 * @summary SupplyDelivery query.
 */
module.exports.SupplyDeliveryInstanceQuery = {
	description: 'Access information about a single SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, getSupplyDeliveryInstance),
	type: SupplyDeliverySchema,
	args: args,
};
