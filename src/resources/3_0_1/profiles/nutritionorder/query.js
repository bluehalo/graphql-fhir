// Schemas
const NutritionOrderSchema = require('../../schemas/nutritionorder.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const NutritionOrderArgs = require('../../parameters/nutritionorder.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	nutritionorderResolver,
	nutritionorderListResolver,
	nutritionorderInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'NutritionOrder',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.NutritionOrderQuery
 * @summary NutritionOrder Query.
 */
module.exports.NutritionOrderQuery = {
	args: Object.assign({}, CommonArgs, NutritionOrderArgs),
	description: 'Query for a single NutritionOrder',
	resolve: scopeInvariant(scopeOptions, nutritionorderResolver),
	type: NutritionOrderSchema
};

/**
 * @name exports.NutritionOrderListQuery
 * @summary NutritionOrderList Query.
 */
module.exports.NutritionOrderListQuery = {
	args: Object.assign({}, CommonArgs, NutritionOrderArgs),
	description: 'Query for multiple NutritionOrders',
	resolve: scopeInvariant(scopeOptions, nutritionorderListResolver),
	type: BundleSchema
};

/**
 * @name exports.NutritionOrderInstanceQuery
 * @summary NutritionOrderInstance Query.
 */
module.exports.NutritionOrderInstanceQuery = {
	description: 'Get information about a single NutritionOrder',
	resolve: scopeInvariant(scopeOptions, nutritionorderInstanceResolver),
	type: NutritionOrderSchema
};
