// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationDispenseSchema = require('../../schemas/medicationdispense.schema');

// Inputs
const MedicationDispenseInput = require('../../inputs/medicationdispense.input');


const {
	medicationdispenseCreateResolver,
	medicationdispenseUpdateResolver,
	medicationdispenseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationDispense record.'
	},
	resource: {
		type: MedicationDispenseInput,
		description: 'MedicationDispense Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a MedicationDispense record for deletion.'
	}
};

/**
 * @name exports.MedicationDispenseCreateMutation
 * @summary MedicationDispenseCreate Mutation.
 */
module.exports.MedicationDispenseCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationDispense',
	resolve: medicationdispenseCreateResolver,
	type: MedicationDispenseSchema
};

/**
 * @name exports.MedicationDispenseUpdateMutation
 * @summary MedicationDispenseUpdate Mutation.
 */
module.exports.MedicationDispenseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationDispenses',
	resolve: medicationdispenseUpdateResolver,
	type: MedicationDispenseSchema
};

/**
 * @name exports.MedicationDispenseDeleteMutation
 * @summary MedicationDispenseDelete Mutation.
 */
module.exports.MedicationDispenseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationDispense',
	resolve: medicationdispenseDeleteResolver,
	type: MedicationDispenseSchema
};
