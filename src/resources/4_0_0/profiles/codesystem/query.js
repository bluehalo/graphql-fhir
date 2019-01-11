// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CodeSystemSchema = require('../../schemas/codesystem.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CodeSystemArgs = require('../../parameters/codesystem.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, CodeSystemArgs);

// Resolvers
const {
	getCodeSystem,
	getCodeSystemList,
	getCodeSystemInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CodeSystem',
	action: 'read',
};

/**
 * @name exports.CodeSystemQuery
 * @summary CodeSystem query.
 */
module.exports.CodeSystemQuery = {
	description: 'Query for a single CodeSystem',
	resolve: scopeInvariant(scopeOptions, getCodeSystem),
	type: CodeSystemSchema,
	args: args,
};

/**
 * @name exports.CodeSystemListQuery
 * @summary CodeSystem query.
 */
module.exports.CodeSystemListQuery = {
	description: 'Query for a more than or just one CodeSystem',
	resolve: scopeInvariant(scopeOptions, getCodeSystemList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CodeSystemInstanceQuery
 * @summary CodeSystem query.
 */
module.exports.CodeSystemInstanceQuery = {
	description: 'Access information about a single CodeSystem',
	resolve: scopeInvariant(scopeOptions, getCodeSystemInstance),
	type: CodeSystemSchema,
	args: args,
};
