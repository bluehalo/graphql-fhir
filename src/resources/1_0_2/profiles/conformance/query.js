// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ConformanceSchema = require('../../schemas/conformance.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ConformanceArgs = require('../../parameters/conformance.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ConformanceArgs);

// Resolvers
const {
	getConformance,
	getConformanceList,
	getConformanceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Conformance',
	action: 'read',
};

/**
 * @name exports.ConformanceQuery
 * @summary Conformance query.
 */
module.exports.ConformanceQuery = {
	description: 'Query for a single Conformance',
	resolve: scopeInvariant(scopeOptions, getConformance),
	type: ConformanceSchema,
	args: args,
};

/**
 * @name exports.ConformanceListQuery
 * @summary Conformance query.
 */
module.exports.ConformanceListQuery = {
	description: 'Query for a more than or just one Conformance',
	resolve: scopeInvariant(scopeOptions, getConformanceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ConformanceInstanceQuery
 * @summary Conformance query.
 */
module.exports.ConformanceInstanceQuery = {
	description: 'Access information about a single Conformance',
	resolve: scopeInvariant(scopeOptions, getConformanceInstance),
	type: ConformanceSchema,
	args: args,
};
