// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const TerminologyCapabilitiesSchema = require('../../schemas/terminologycapabilities.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const TerminologyCapabilitiesArgs = require('../../parameters/terminologycapabilities.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	TerminologyCapabilitiesArgs,
);

// Resolvers
const {
	getTerminologyCapabilities,
	getTerminologyCapabilitiesList,
	getTerminologyCapabilitiesInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'TerminologyCapabilities',
	action: 'read',
};

/**
 * @name exports.TerminologyCapabilitiesQuery
 * @summary TerminologyCapabilities query.
 */
module.exports.TerminologyCapabilitiesQuery = {
	description: 'Query for a single TerminologyCapabilities',
	resolve: scopeInvariant(scopeOptions, getTerminologyCapabilities),
	type: TerminologyCapabilitiesSchema,
	args: args,
};

/**
 * @name exports.TerminologyCapabilitiesListQuery
 * @summary TerminologyCapabilities query.
 */
module.exports.TerminologyCapabilitiesListQuery = {
	description: 'Query for a more than or just one TerminologyCapabilities',
	resolve: scopeInvariant(scopeOptions, getTerminologyCapabilitiesList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.TerminologyCapabilitiesInstanceQuery
 * @summary TerminologyCapabilities query.
 */
module.exports.TerminologyCapabilitiesInstanceQuery = {
	description: 'Access information about a single TerminologyCapabilities',
	resolve: scopeInvariant(scopeOptions, getTerminologyCapabilitiesInstance),
	type: TerminologyCapabilitiesSchema,
	args: args,
};
