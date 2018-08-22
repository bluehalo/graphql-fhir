// Schemas
const CarePlanSchema = require('../../schemas/careplan.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CarePlanArgs = require('../../parameters/careplan.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	careplanResolver,
	careplanListResolver,
	careplanInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CarePlan',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.CarePlanQuery
 * @summary CarePlan Query.
 */
module.exports.CarePlanQuery = {
	args: Object.assign({}, CommonArgs, CarePlanArgs),
	description: 'Query for a single CarePlan',
	resolve: scopeInvariant(scopeOptions, careplanResolver),
	type: CarePlanSchema
};

/**
 * @name exports.CarePlanListQuery
 * @summary CarePlanList Query.
 */
module.exports.CarePlanListQuery = {
	args: Object.assign({}, CommonArgs, CarePlanArgs),
	description: 'Query for multiple CarePlans',
	resolve: scopeInvariant(scopeOptions, careplanListResolver),
	type: BundleSchema
};

/**
 * @name exports.CarePlanInstanceQuery
 * @summary CarePlanInstance Query.
 */
module.exports.CarePlanInstanceQuery = {
	description: 'Get information about a single CarePlan',
	resolve: scopeInvariant(scopeOptions, careplanInstanceResolver),
	type: CarePlanSchema
};
