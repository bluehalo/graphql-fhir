// Schemas
const CodeSystemSchema = require('../../schemas/codesystem.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CodeSystemArgs = require('../../parameters/codesystem.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	codesystemResolver,
	codesystemListResolver,
	codesystemInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CodeSystem',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.CodeSystemQuery
 * @summary CodeSystem Query.
 */
module.exports.CodeSystemQuery = {
	args: Object.assign({}, CommonArgs, CodeSystemArgs),
	description: 'Query for a single CodeSystem',
	resolve: scopeInvariant(scopeOptions, codesystemResolver),
	type: CodeSystemSchema,
};

/**
 * @name exports.CodeSystemListQuery
 * @summary CodeSystemList Query.
 */
module.exports.CodeSystemListQuery = {
	args: Object.assign({}, CommonArgs, CodeSystemArgs),
	description: 'Query for multiple CodeSystems',
	resolve: scopeInvariant(scopeOptions, codesystemListResolver),
	type: BundleSchema,
};

/**
 * @name exports.CodeSystemInstanceQuery
 * @summary CodeSystemInstance Query.
 */
module.exports.CodeSystemInstanceQuery = {
	description: 'Get information about a single CodeSystem',
	resolve: scopeInvariant(scopeOptions, codesystemInstanceResolver),
	type: CodeSystemSchema,
};
