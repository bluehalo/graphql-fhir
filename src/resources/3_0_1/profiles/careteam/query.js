// Schemas
const CareTeamSchema = require('../../schemas/careteam.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CareTeamArgs = require('../../parameters/careteam.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	careteamResolver,
	careteamListResolver,
	careteamInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CareTeam',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.CareTeamQuery
 * @summary CareTeam Query.
 */
module.exports.CareTeamQuery = {
	args: Object.assign({}, CommonArgs, CareTeamArgs),
	description: 'Query for a single CareTeam',
	resolve: scopeInvariant(scopeOptions, careteamResolver),
	type: CareTeamSchema
};

/**
 * @name exports.CareTeamListQuery
 * @summary CareTeamList Query.
 */
module.exports.CareTeamListQuery = {
	args: Object.assign({}, CommonArgs, CareTeamArgs),
	description: 'Query for multiple CareTeams',
	resolve: scopeInvariant(scopeOptions, careteamListResolver),
	type: BundleSchema
};

/**
 * @name exports.CareTeamInstanceQuery
 * @summary CareTeamInstance Query.
 */
module.exports.CareTeamInstanceQuery = {
	description: 'Get information about a single CareTeam',
	resolve: scopeInvariant(scopeOptions, careteamInstanceResolver),
	type: CareTeamSchema
};
