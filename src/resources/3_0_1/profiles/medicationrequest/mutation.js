// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationRequestSchema = require('../../schemas/medicationrequest.schema');

// Inputs
const MedicationRequestInput = require('../../inputs/medicationrequest.input');


const {
	medicationrequestCreateResolver,
	medicationrequestUpdateResolver,
	medicationrequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationRequest record.'
	},
	resource: {
		type: MedicationRequestInput,
		description: 'MedicationRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a MedicationRequest record for deletion.'
	}
};

/**
 * @name exports.MedicationRequestCreateMutation
 * @summary MedicationRequestCreate Mutation.
 */
module.exports.MedicationRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationRequest',
	resolve: medicationrequestCreateResolver,
	type: MedicationRequestSchema
};

/**
 * @name exports.MedicationRequestUpdateMutation
 * @summary MedicationRequestUpdate Mutation.
 */
module.exports.MedicationRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationRequests',
	resolve: medicationrequestUpdateResolver,
	type: MedicationRequestSchema
};

/**
 * @name exports.MedicationRequestDeleteMutation
 * @summary MedicationRequestDelete Mutation.
 */
module.exports.MedicationRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationRequest',
	resolve: medicationrequestDeleteResolver,
	type: MedicationRequestSchema
};
