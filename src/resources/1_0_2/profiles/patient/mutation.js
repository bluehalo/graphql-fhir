// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PatientSchema = require('../../schemas/patient.schema');

// Inputs
const PatientInput = require('../../inputs/patient.input');


const {
	patientCreateResolver,
	patientUpdateResolver,
	patientDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Patient record.'
	},
	resource: {
		type: PatientInput,
		description: 'Patient Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Patient record for deletion.'
	}
};

/**
 * @name exports.PatientCreateMutation
 * @summary PatientCreate Mutation.
 */
module.exports.PatientCreateMutation = {
	args: WriteArgs,
	description: 'Create a Patient',
	resolve: patientCreateResolver,
	type: PatientSchema
};

/**
 * @name exports.PatientUpdateMutation
 * @summary PatientUpdate Mutation.
 */
module.exports.PatientUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Patients',
	resolve: patientUpdateResolver,
	type: PatientSchema
};

/**
 * @name exports.PatientDeleteMutation
 * @summary PatientDelete Mutation.
 */
module.exports.PatientDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Patient',
	resolve: patientDeleteResolver,
	type: PatientSchema
};
