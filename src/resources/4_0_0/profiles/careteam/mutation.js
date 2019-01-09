// Schemas
const CareTeamSchema = require('../../schemas/careteam.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CareTeamInput = require('../../inputs/careteam.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCareTeam,
	updateCareTeam,
	removeCareTeam,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CareTeam',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a CareTeam record.',
	},
	resource: {
		type: new GraphQLNonNull(CareTeamInput),
		description: 'CareTeam Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CareTeam record for deletion.',
	},
};

/**
 * @name exports.CareTeamCreateMutation
 * @summary CareTeamCreate mutation.
 */
module.exports.CareTeamCreateMutation = {
	description: 'Create a CareTeam record',
	resolve: scopeInvariant(scopeOptions, createCareTeam),
	type: CareTeamSchema,
	args: WriteArgs,
};

/**
 * @name exports.CareTeamUpdateMutation
 * @summary CareTeamUpdate mutation.
 */
module.exports.CareTeamUpdateMutation = {
	description: 'Update a CareTeam record',
	resolve: scopeInvariant(scopeOptions, updateCareTeam),
	type: CareTeamSchema,
	args: WriteArgs,
};

/**
 * @name exports.CareTeamRemoveMutation
 * @summary CareTeamRemove mutation.
 */
module.exports.CareTeamRemoveMutation = {
	description: 'Remove a CareTeam record',
	resolve: scopeInvariant(scopeOptions, removeCareTeam),
	type: CareTeamSchema,
	args: DeleteArgs,
};
