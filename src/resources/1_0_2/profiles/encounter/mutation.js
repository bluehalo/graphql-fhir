// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EncounterSchema = require('../../schemas/encounter.schema');

// Inputs
const EncounterInput = require('../../inputs/encounter.input');

// Resolvers
const {
	encounterCreateResolver,
	encounterUpdateResolver,
	encounterDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Encounter',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Encounter record.',
	},
	resource: {
		type: new GraphQLNonNull(EncounterInput),
		description: 'Encounter Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Encounter record for deletion.',
	},
};

/**
 * @name exports.EncounterCreateMutation
 * @summary EncounterCreate Mutation.
 */
module.exports.EncounterCreateMutation = {
	args: WriteArgs,
	description: 'Create a Encounter',
	resolve: scopeInvariant(scopeOptions, encounterCreateResolver),
	type: EncounterSchema,
};

/**
 * @name exports.EncounterUpdateMutation
 * @summary EncounterUpdate Mutation.
 */
module.exports.EncounterUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Encounters',
	resolve: scopeInvariant(scopeOptions, encounterUpdateResolver),
	type: EncounterSchema,
};

/**
 * @name exports.EncounterDeleteMutation
 * @summary EncounterDelete Mutation.
 */
module.exports.EncounterDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Encounter',
	resolve: scopeInvariant(scopeOptions, encounterDeleteResolver),
	type: EncounterSchema,
};
