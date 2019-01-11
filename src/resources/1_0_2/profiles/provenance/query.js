// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ProvenanceSchema = require('../../schemas/provenance.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ProvenanceArgs = require('../../parameters/provenance.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ProvenanceArgs);

// Resolvers
const {
	getProvenance,
	getProvenanceList,
	getProvenanceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Provenance',
	action: 'read',
};

/**
 * @name exports.ProvenanceQuery
 * @summary Provenance query.
 */
module.exports.ProvenanceQuery = {
	description: 'Query for a single Provenance',
	resolve: scopeInvariant(scopeOptions, getProvenance),
	type: ProvenanceSchema,
	args: args,
};

/**
 * @name exports.ProvenanceListQuery
 * @summary Provenance query.
 */
module.exports.ProvenanceListQuery = {
	description: 'Query for a more than or just one Provenance',
	resolve: scopeInvariant(scopeOptions, getProvenanceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ProvenanceInstanceQuery
 * @summary Provenance query.
 */
module.exports.ProvenanceInstanceQuery = {
	description: 'Access information about a single Provenance',
	resolve: scopeInvariant(scopeOptions, getProvenanceInstance),
	type: ProvenanceSchema,
	args: args,
};
