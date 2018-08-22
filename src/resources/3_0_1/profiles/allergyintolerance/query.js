// Schemas
const AllergyIntoleranceSchema = require('../../schemas/allergyintolerance.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AllergyIntoleranceArgs = require('../../parameters/allergyintolerance.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	allergyintoleranceResolver,
	allergyintoleranceListResolver,
	allergyintoleranceInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AllergyIntolerance',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.AllergyIntoleranceQuery
 * @summary AllergyIntolerance Query.
 */
module.exports.AllergyIntoleranceQuery = {
	args: Object.assign({}, CommonArgs, AllergyIntoleranceArgs),
	description: 'Query for a single AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, allergyintoleranceResolver),
	type: AllergyIntoleranceSchema
};

/**
 * @name exports.AllergyIntoleranceListQuery
 * @summary AllergyIntoleranceList Query.
 */
module.exports.AllergyIntoleranceListQuery = {
	args: Object.assign({}, CommonArgs, AllergyIntoleranceArgs),
	description: 'Query for multiple AllergyIntolerances',
	resolve: scopeInvariant(scopeOptions, allergyintoleranceListResolver),
	type: BundleSchema
};

/**
 * @name exports.AllergyIntoleranceInstanceQuery
 * @summary AllergyIntoleranceInstance Query.
 */
module.exports.AllergyIntoleranceInstanceQuery = {
	description: 'Get information about a single AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, allergyintoleranceInstanceResolver),
	type: AllergyIntoleranceSchema
};
