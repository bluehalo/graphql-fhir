// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CareTeamSchema = require('../../schemas/careteam.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CareTeamArgs = require('../../parameters/careteam.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, CareTeamArgs);

// Resolvers
const {
	getCareTeam,
	getCareTeamList,
	getCareTeamInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CareTeam',
	action: 'read',
};

/**
 * @name exports.CareTeamQuery
 * @summary CareTeam query.
 */
module.exports.CareTeamQuery = {
	description: 'Query for a single CareTeam',
	resolve: scopeInvariant(scopeOptions, getCareTeam),
	type: CareTeamSchema,
	args: args,
};

/**
 * @name exports.CareTeamListQuery
 * @summary CareTeam query.
 */
module.exports.CareTeamListQuery = {
	description: 'Query for a more than or just one CareTeam',
	resolve: scopeInvariant(scopeOptions, getCareTeamList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CareTeamInstanceQuery
 * @summary CareTeam query.
 */
module.exports.CareTeamInstanceQuery = {
	description: 'Access information about a single CareTeam',
	resolve: scopeInvariant(scopeOptions, getCareTeamInstance),
	type: CareTeamSchema,
	args: args,
};
