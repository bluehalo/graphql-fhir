// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const CarePlanSchema = require('../../schemas/careplan.schema');

// Arguments
const CarePlanArgs = require('../../parameters/careplan.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	careplanResolver,
	careplanListResolver,
	careplanInstanceResolver
} = require('./resolver');

/**
 * @name exports.CarePlanQuery
 * @summary CarePlan Query.
 */
module.exports.CarePlanQuery = {
	args: Object.assign({}, CommonArgs, CarePlanArgs),
	description: 'Query for a single CarePlan',
	resolve: careplanResolver,
	type: CarePlanSchema
};

/**
 * @name exports.CarePlanListQuery
 * @summary CarePlanList Query.
 */
module.exports.CarePlanListQuery = {
	args: Object.assign({}, CommonArgs, CarePlanArgs),
	description: 'Query for multiple CarePlans',
	resolve: careplanListResolver,
	type: BundleSchema
};

/**
 * @name exports.CarePlanInstanceQuery
 * @summary CarePlanInstance Query.
 */
module.exports.CarePlanInstanceQuery = {
	description: 'Get information about a single CarePlan',
	resolve: careplanInstanceResolver,
	type: CarePlanSchema
};
