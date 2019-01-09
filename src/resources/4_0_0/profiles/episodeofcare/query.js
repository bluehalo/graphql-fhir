// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EpisodeOfCareSchema = require('../../schemas/episodeofcare.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EpisodeOfCareArgs = require('../../parameters/episodeofcare.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	EpisodeOfCareArgs,
);

// Resolvers
const {
	getEpisodeOfCare,
	getEpisodeOfCareList,
	getEpisodeOfCareInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EpisodeOfCare',
	action: 'read',
};

/**
 * @name exports.EpisodeOfCareQuery
 * @summary EpisodeOfCare query.
 */
module.exports.EpisodeOfCareQuery = {
	description: 'Query for a single EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, getEpisodeOfCare),
	type: EpisodeOfCareSchema,
	args: args,
};

/**
 * @name exports.EpisodeOfCareListQuery
 * @summary EpisodeOfCare query.
 */
module.exports.EpisodeOfCareListQuery = {
	description: 'Query for a more than or just one EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, getEpisodeOfCareList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EpisodeOfCareInstanceQuery
 * @summary EpisodeOfCare query.
 */
module.exports.EpisodeOfCareInstanceQuery = {
	description: 'Access information about a single EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, getEpisodeOfCareInstance),
	type: EpisodeOfCareSchema,
	args: args,
};
