// Schemas
const CodeSystemSchema = require('../../schemas/codesystem.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CodeSystemArgs = require('../../parameters/codesystem.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	codesystemResolver,
	codesystemListResolver,
	codesystemInstanceResolver
} = require('./resolver');

/**
 * @name exports.CodeSystemQuery
 * @summary CodeSystem Query.
 */
module.exports.CodeSystemQuery = {
	args: Object.assign({}, CommonArgs, CodeSystemArgs),
	description: 'Query for a single CodeSystem',
	resolve: codesystemResolver,
	type: CodeSystemSchema
};

/**
 * @name exports.CodeSystemListQuery
 * @summary CodeSystemList Query.
 */
module.exports.CodeSystemListQuery = {
	args: Object.assign({}, CommonArgs, CodeSystemArgs),
	description: 'Query for multiple CodeSystems',
	resolve: codesystemListResolver,
	type: BundleSchema
};

/**
 * @name exports.CodeSystemInstanceQuery
 * @summary CodeSystemInstance Query.
 */
module.exports.CodeSystemInstanceQuery = {
	description: 'Get information about a single CodeSystem',
	resolve: codesystemInstanceResolver,
	type: CodeSystemSchema
};
