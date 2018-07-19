// Schemas
const TestScriptSchema = require('../../schemas/testscript.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const TestScriptArgs = require('../../parameters/testscript.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	testscriptResolver,
	testscriptListResolver,
	testscriptInstanceResolver
} = require('./resolver');

/**
 * @name exports.TestScriptQuery
 * @summary TestScript Query.
 */
module.exports.TestScriptQuery = {
	args: Object.assign({}, CommonArgs, TestScriptArgs),
	description: 'Query for a single TestScript',
	resolve: testscriptResolver,
	type: TestScriptSchema
};

/**
 * @name exports.TestScriptListQuery
 * @summary TestScriptList Query.
 */
module.exports.TestScriptListQuery = {
	args: Object.assign({}, CommonArgs, TestScriptArgs),
	description: 'Query for multiple TestScripts',
	resolve: testscriptListResolver,
	type: BundleSchema
};

/**
 * @name exports.TestScriptInstanceQuery
 * @summary TestScriptInstance Query.
 */
module.exports.TestScriptInstanceQuery = {
	description: 'Get information about a single TestScript',
	resolve: testscriptInstanceResolver,
	type: TestScriptSchema
};
