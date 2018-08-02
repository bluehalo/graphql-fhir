// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationAdministrationSchema = require('../../schemas/medicationadministration.schema');

// Inputs
const MedicationAdministrationInput = require('../../inputs/medicationadministration.input');


const {
	medicationadministrationCreateResolver,
	medicationadministrationUpdateResolver,
	medicationadministrationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationAdministration record.'
	},
	resource: {
		type: MedicationAdministrationInput,
		description: 'MedicationAdministration Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a MedicationAdministration record for deletion.'
	}
};

/**
 * @name exports.MedicationAdministrationCreateMutation
 * @summary MedicationAdministrationCreate Mutation.
 */
module.exports.MedicationAdministrationCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationAdministration',
	resolve: medicationadministrationCreateResolver,
	type: MedicationAdministrationSchema
};

/**
 * @name exports.MedicationAdministrationUpdateMutation
 * @summary MedicationAdministrationUpdate Mutation.
 */
module.exports.MedicationAdministrationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationAdministrations',
	resolve: medicationadministrationUpdateResolver,
	type: MedicationAdministrationSchema
};

/**
 * @name exports.MedicationAdministrationDeleteMutation
 * @summary MedicationAdministrationDelete Mutation.
 */
module.exports.MedicationAdministrationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationAdministration',
	resolve: medicationadministrationDeleteResolver,
	type: MedicationAdministrationSchema
};
