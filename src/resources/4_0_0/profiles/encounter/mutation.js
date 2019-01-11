// Schemas
const EncounterSchema = require('../../schemas/encounter.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EncounterInput = require('../../inputs/encounter.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEncounter,
	updateEncounter,
	removeEncounter,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Encounter',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Encounter record.',
	},
	resource: {
		type: new GraphQLNonNull(EncounterInput),
		description: 'Encounter Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Encounter record for deletion.',
	},
};

/**
 * @name exports.EncounterCreateMutation
 * @summary EncounterCreate mutation.
 */
module.exports.EncounterCreateMutation = {
	description: 'Create a Encounter record',
	resolve: scopeInvariant(scopeOptions, createEncounter),
	type: EncounterSchema,
	args: WriteArgs,
};

/**
 * @name exports.EncounterUpdateMutation
 * @summary EncounterUpdate mutation.
 */
module.exports.EncounterUpdateMutation = {
	description: 'Update a Encounter record',
	resolve: scopeInvariant(scopeOptions, updateEncounter),
	type: EncounterSchema,
	args: WriteArgs,
};

/**
 * @name exports.EncounterRemoveMutation
 * @summary EncounterRemove mutation.
 */
module.exports.EncounterRemoveMutation = {
	description: 'Remove a Encounter record',
	resolve: scopeInvariant(scopeOptions, removeEncounter),
	type: EncounterSchema,
	args: DeleteArgs,
};
