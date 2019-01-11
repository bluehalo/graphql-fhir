// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ProcessResponseSchema = require('../../schemas/processresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ProcessResponseArgs = require('../../parameters/processresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ProcessResponseArgs);

// Resolvers
const {
	getProcessResponse,
	getProcessResponseList,
	getProcessResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ProcessResponse',
	action: 'read',
};

/**
 * @name exports.ProcessResponseQuery
 * @summary ProcessResponse query.
 */
module.exports.ProcessResponseQuery = {
	description: 'Query for a single ProcessResponse',
	resolve: scopeInvariant(scopeOptions, getProcessResponse),
	type: ProcessResponseSchema,
	args: args,
};

/**
 * @name exports.ProcessResponseListQuery
 * @summary ProcessResponse query.
 */
module.exports.ProcessResponseListQuery = {
	description: 'Query for a more than or just one ProcessResponse',
	resolve: scopeInvariant(scopeOptions, getProcessResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ProcessResponseInstanceQuery
 * @summary ProcessResponse query.
 */
module.exports.ProcessResponseInstanceQuery = {
	description: 'Access information about a single ProcessResponse',
	resolve: scopeInvariant(scopeOptions, getProcessResponseInstance),
	type: ProcessResponseSchema,
	args: args,
};
