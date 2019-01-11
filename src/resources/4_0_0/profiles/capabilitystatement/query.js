// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CapabilityStatementSchema = require('../../schemas/capabilitystatement.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CapabilityStatementArgs = require('../../parameters/capabilitystatement.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	CapabilityStatementArgs,
);

// Resolvers
const {
	getCapabilityStatement,
	getCapabilityStatementList,
	getCapabilityStatementInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CapabilityStatement',
	action: 'read',
};

/**
 * @name exports.CapabilityStatementQuery
 * @summary CapabilityStatement query.
 */
module.exports.CapabilityStatementQuery = {
	description: 'Query for a single CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, getCapabilityStatement),
	type: CapabilityStatementSchema,
	args: args,
};

/**
 * @name exports.CapabilityStatementListQuery
 * @summary CapabilityStatement query.
 */
module.exports.CapabilityStatementListQuery = {
	description: 'Query for a more than or just one CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, getCapabilityStatementList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CapabilityStatementInstanceQuery
 * @summary CapabilityStatement query.
 */
module.exports.CapabilityStatementInstanceQuery = {
	description: 'Access information about a single CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, getCapabilityStatementInstance),
	type: CapabilityStatementSchema,
	args: args,
};
