// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationStatementSchema = require('../../schemas/medicationstatement.schema');

// Inputs
const MedicationStatementInput = require('../../inputs/medicationstatement.input');


const {
	medicationstatementCreateResolver,
	medicationstatementUpdateResolver,
	medicationstatementDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationStatement record.'
	},
	resource: {
		type: MedicationStatementInput,
		description: 'MedicationStatement Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a MedicationStatement record for deletion.'
	}
};

/**
 * @name exports.MedicationStatementCreateMutation
 * @summary MedicationStatementCreate Mutation.
 */
module.exports.MedicationStatementCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationStatement',
	resolve: medicationstatementCreateResolver,
	type: MedicationStatementSchema
};

/**
 * @name exports.MedicationStatementUpdateMutation
 * @summary MedicationStatementUpdate Mutation.
 */
module.exports.MedicationStatementUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationStatements',
	resolve: medicationstatementUpdateResolver,
	type: MedicationStatementSchema
};

/**
 * @name exports.MedicationStatementDeleteMutation
 * @summary MedicationStatementDelete Mutation.
 */
module.exports.MedicationStatementDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationStatement',
	resolve: medicationstatementDeleteResolver,
	type: MedicationStatementSchema
};
