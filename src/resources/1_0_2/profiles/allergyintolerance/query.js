// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const AllergyIntoleranceSchema = require('../../schemas/allergyintolerance.schema');

// Arguments
const AllergyIntoleranceArgs = require('../../parameters/allergyintolerance.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	allergyintoleranceResolver,
	allergyintoleranceListResolver,
	allergyintoleranceInstanceResolver
} = require('./resolver');

/**
 * @name exports.AllergyIntoleranceQuery
 * @summary AllergyIntolerance Query.
 */
module.exports.AllergyIntoleranceQuery = {
	args: Object.assign({}, CommonArgs, AllergyIntoleranceArgs),
	description: 'Query for a single AllergyIntolerance',
	resolve: allergyintoleranceResolver,
	type: AllergyIntoleranceSchema
};

/**
 * @name exports.AllergyIntoleranceListQuery
 * @summary AllergyIntoleranceList Query.
 */
module.exports.AllergyIntoleranceListQuery = {
	args: Object.assign({}, CommonArgs, AllergyIntoleranceArgs),
	description: 'Query for multiple AllergyIntolerances',
	resolve: allergyintoleranceListResolver,
	type: BundleSchema
};

/**
 * @name exports.AllergyIntoleranceInstanceQuery
 * @summary AllergyIntoleranceInstance Query.
 */
module.exports.AllergyIntoleranceInstanceQuery = {
	description: 'Get information about a single AllergyIntolerance',
	resolve: allergyintoleranceInstanceResolver,
	type: AllergyIntoleranceSchema
};
