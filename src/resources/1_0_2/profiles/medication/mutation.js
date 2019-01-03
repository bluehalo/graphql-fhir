// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationSchema = require('../../schemas/medication.schema');

// Inputs
const MedicationInput = require('../../inputs/medication.input');

// Resolvers
const {
	medicationCreateResolver,
	medicationUpdateResolver,
	medicationDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Medication',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Medication record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationInput),
		description: 'Medication Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Medication record for deletion.',
	},
};

/**
 * @name exports.MedicationCreateMutation
 * @summary MedicationCreate Mutation.
 */
module.exports.MedicationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Medication',
	resolve: scopeInvariant(scopeOptions, medicationCreateResolver),
	type: MedicationSchema,
};

/**
 * @name exports.MedicationUpdateMutation
 * @summary MedicationUpdate Mutation.
 */
module.exports.MedicationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Medications',
	resolve: scopeInvariant(scopeOptions, medicationUpdateResolver),
	type: MedicationSchema,
};

/**
 * @name exports.MedicationDeleteMutation
 * @summary MedicationDelete Mutation.
 */
module.exports.MedicationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Medication',
	resolve: scopeInvariant(scopeOptions, medicationDeleteResolver),
	type: MedicationSchema,
};
