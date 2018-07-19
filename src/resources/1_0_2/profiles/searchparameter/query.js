// Schemas
const SearchParameterSchema = require('../../schemas/searchparameter.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SearchParameterArgs = require('../../parameters/searchparameter.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	searchparameterResolver,
	searchparameterListResolver,
	searchparameterInstanceResolver
} = require('./resolver');

/**
 * @name exports.SearchParameterQuery
 * @summary SearchParameter Query.
 */
module.exports.SearchParameterQuery = {
	args: Object.assign({}, CommonArgs, SearchParameterArgs),
	description: 'Query for a single SearchParameter',
	resolve: searchparameterResolver,
	type: SearchParameterSchema
};

/**
 * @name exports.SearchParameterListQuery
 * @summary SearchParameterList Query.
 */
module.exports.SearchParameterListQuery = {
	args: Object.assign({}, CommonArgs, SearchParameterArgs),
	description: 'Query for multiple SearchParameters',
	resolve: searchparameterListResolver,
	type: BundleSchema
};

/**
 * @name exports.SearchParameterInstanceQuery
 * @summary SearchParameterInstance Query.
 */
module.exports.SearchParameterInstanceQuery = {
	description: 'Get information about a single SearchParameter',
	resolve: searchparameterInstanceResolver,
	type: SearchParameterSchema
};
