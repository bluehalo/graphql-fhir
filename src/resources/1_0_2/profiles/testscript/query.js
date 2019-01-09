// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const TestScriptSchema = require('../../schemas/testscript.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const TestScriptArgs = require('../../parameters/testscript.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, TestScriptArgs);

// Resolvers
const {
	getTestScript,
	getTestScriptList,
	getTestScriptInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'TestScript',
	action: 'read',
};

/**
 * @name exports.TestScriptQuery
 * @summary TestScript query.
 */
module.exports.TestScriptQuery = {
	description: 'Query for a single TestScript',
	resolve: scopeInvariant(scopeOptions, getTestScript),
	type: TestScriptSchema,
	args: args,
};

/**
 * @name exports.TestScriptListQuery
 * @summary TestScript query.
 */
module.exports.TestScriptListQuery = {
	description: 'Query for a more than or just one TestScript',
	resolve: scopeInvariant(scopeOptions, getTestScriptList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.TestScriptInstanceQuery
 * @summary TestScript query.
 */
module.exports.TestScriptInstanceQuery = {
	description: 'Access information about a single TestScript',
	resolve: scopeInvariant(scopeOptions, getTestScriptInstance),
	type: TestScriptSchema,
	args: args,
};
