// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EvidenceSchema = require('../../schemas/evidence.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EvidenceArgs = require('../../parameters/evidence.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, EvidenceArgs);

// Resolvers
const {
	getEvidence,
	getEvidenceList,
	getEvidenceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Evidence',
	action: 'read',
};

/**
 * @name exports.EvidenceQuery
 * @summary Evidence query.
 */
module.exports.EvidenceQuery = {
	description: 'Query for a single Evidence',
	resolve: scopeInvariant(scopeOptions, getEvidence),
	type: EvidenceSchema,
	args: args,
};

/**
 * @name exports.EvidenceListQuery
 * @summary Evidence query.
 */
module.exports.EvidenceListQuery = {
	description: 'Query for a more than or just one Evidence',
	resolve: scopeInvariant(scopeOptions, getEvidenceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EvidenceInstanceQuery
 * @summary Evidence query.
 */
module.exports.EvidenceInstanceQuery = {
	description: 'Access information about a single Evidence',
	resolve: scopeInvariant(scopeOptions, getEvidenceInstance),
	type: EvidenceSchema,
	args: args,
};
