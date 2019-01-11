// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const NutritionOrderSchema = require('../../schemas/nutritionorder.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const NutritionOrderArgs = require('../../parameters/nutritionorder.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	NutritionOrderArgs,
);

// Resolvers
const {
	getNutritionOrder,
	getNutritionOrderList,
	getNutritionOrderInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'NutritionOrder',
	action: 'read',
};

/**
 * @name exports.NutritionOrderQuery
 * @summary NutritionOrder query.
 */
module.exports.NutritionOrderQuery = {
	description: 'Query for a single NutritionOrder',
	resolve: scopeInvariant(scopeOptions, getNutritionOrder),
	type: NutritionOrderSchema,
	args: args,
};

/**
 * @name exports.NutritionOrderListQuery
 * @summary NutritionOrder query.
 */
module.exports.NutritionOrderListQuery = {
	description: 'Query for a more than or just one NutritionOrder',
	resolve: scopeInvariant(scopeOptions, getNutritionOrderList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.NutritionOrderInstanceQuery
 * @summary NutritionOrder query.
 */
module.exports.NutritionOrderInstanceQuery = {
	description: 'Access information about a single NutritionOrder',
	resolve: scopeInvariant(scopeOptions, getNutritionOrderInstance),
	type: NutritionOrderSchema,
	args: args,
};
