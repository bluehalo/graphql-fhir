// Schemas
const CareTeamSchema = require('../../schemas/careteam.schema');

// Arguments
const CareTeamArgs = require('../../parameters/careteam.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	careteamResolver,
	careteamListResolver,
	careteamInstanceResolver
} = require('./resolver');

/**
 * @name exports.CareTeamQuery
 * @summary CareTeam Query.
 */
module.exports.CareTeamQuery = {
	args: Object.assign({}, CommonArgs, CareTeamArgs),
	description: 'Query for a single CareTeam',
	resolve: careteamResolver,
	type: CareTeamSchema
};

/**
 * @name exports.CareTeamListQuery
 * @summary CareTeamList Query.
 */
module.exports.CareTeamListQuery = {
	args: Object.assign({}, CommonArgs, CareTeamArgs),
	description: 'Query for multiple CareTeams',
	resolve: careteamListResolver,
	type: new GraphQLList(CareTeamSchema)
};

/**
 * @name exports.CareTeamInstanceQuery
 * @summary CareTeamInstance Query.
 */
module.exports.CareTeamInstanceQuery = {
	description: 'Get information about a single CareTeam',
	resolve: careteamInstanceResolver,
	type: CareTeamSchema
};
