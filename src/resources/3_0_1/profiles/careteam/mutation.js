// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CareTeamSchema = require('../../schemas/careteam.schema');

// Inputs
const CareTeamInput = require('../../inputs/careteam.input');

// Resolvers
const {
	careteamCreateResolver,
	careteamUpdateResolver,
	careteamDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CareTeam',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CareTeam record.'
	},
	resource: {
		type: new GraphQLNonNull(CareTeamInput),
		description: 'CareTeam Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a CareTeam record for deletion.'
	}
};

/**
 * @name exports.CareTeamCreateMutation
 * @summary CareTeamCreate Mutation.
 */
module.exports.CareTeamCreateMutation = {
	args: WriteArgs,
	description: 'Create a CareTeam',
	resolve: scopeInvariant(scopeOptions, careteamCreateResolver),
	type: CareTeamSchema
};

/**
 * @name exports.CareTeamUpdateMutation
 * @summary CareTeamUpdate Mutation.
 */
module.exports.CareTeamUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CareTeams',
	resolve: scopeInvariant(scopeOptions, careteamUpdateResolver),
	type: CareTeamSchema
};

/**
 * @name exports.CareTeamDeleteMutation
 * @summary CareTeamDelete Mutation.
 */
module.exports.CareTeamDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CareTeam',
	resolve: scopeInvariant(scopeOptions, careteamDeleteResolver),
	type: CareTeamSchema
};
