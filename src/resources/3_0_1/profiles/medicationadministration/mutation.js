// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationAdministrationSchema = require('../../schemas/medicationadministration.schema');

// Inputs
const MedicationAdministrationInput = require('../../inputs/medicationadministration.input');

// Resolvers
const {
	medicationadministrationCreateResolver,
	medicationadministrationUpdateResolver,
	medicationadministrationDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationAdministration',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a MedicationAdministration record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationAdministrationInput),
		description: 'MedicationAdministration Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a MedicationAdministration record for deletion.',
	},
};

/**
 * @name exports.MedicationAdministrationCreateMutation
 * @summary MedicationAdministrationCreate Mutation.
 */
module.exports.MedicationAdministrationCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, medicationadministrationCreateResolver),
	type: MedicationAdministrationSchema,
};

/**
 * @name exports.MedicationAdministrationUpdateMutation
 * @summary MedicationAdministrationUpdate Mutation.
 */
module.exports.MedicationAdministrationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationAdministrations',
	resolve: scopeInvariant(scopeOptions, medicationadministrationUpdateResolver),
	type: MedicationAdministrationSchema,
};

/**
 * @name exports.MedicationAdministrationDeleteMutation
 * @summary MedicationAdministrationDelete Mutation.
 */
module.exports.MedicationAdministrationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, medicationadministrationDeleteResolver),
	type: MedicationAdministrationSchema,
};
