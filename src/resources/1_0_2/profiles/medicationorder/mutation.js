// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationOrderSchema = require('../../schemas/medicationorder.schema');

// Inputs
const MedicationOrderInput = require('../../inputs/medicationorder.input');


const {
	medicationorderCreateResolver,
	medicationorderUpdateResolver,
	medicationorderDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationOrder record.'
	},
	resource: {
		type: MedicationOrderInput,
		description: 'MedicationOrder Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a MedicationOrder record for deletion.'
	}
};

/**
 * @name exports.MedicationOrderCreateMutation
 * @summary MedicationOrderCreate Mutation.
 */
module.exports.MedicationOrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationOrder',
	resolve: medicationorderCreateResolver,
	type: MedicationOrderSchema
};

/**
 * @name exports.MedicationOrderUpdateMutation
 * @summary MedicationOrderUpdate Mutation.
 */
module.exports.MedicationOrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationOrders',
	resolve: medicationorderUpdateResolver,
	type: MedicationOrderSchema
};

/**
 * @name exports.MedicationOrderDeleteMutation
 * @summary MedicationOrderDelete Mutation.
 */
module.exports.MedicationOrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationOrder',
	resolve: medicationorderDeleteResolver,
	type: MedicationOrderSchema
};
