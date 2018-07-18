// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationSchema = require('../../schemas/medication.schema');

// Inputs
const MedicationInput = require('../../inputs/medication.input');


const {
	medicationCreateResolver,
	medicationUpdateResolver,
	medicationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Medication record.'
	},
	resource: {
		type: MedicationInput,
		description: 'Medication Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Medication record for deletion.'
	}
};

/**
 * @name exports.MedicationCreateMutation
 * @summary MedicationCreate Mutation.
 */
module.exports.MedicationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Medication',
	resolve: medicationCreateResolver,
	type: MedicationSchema
};

/**
 * @name exports.MedicationUpdateMutation
 * @summary MedicationUpdate Mutation.
 */
module.exports.MedicationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Medications',
	resolve: medicationUpdateResolver,
	type: MedicationSchema
};

/**
 * @name exports.MedicationDeleteMutation
 * @summary MedicationDelete Mutation.
 */
module.exports.MedicationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Medication',
	resolve: medicationDeleteResolver,
	type: MedicationSchema
};
