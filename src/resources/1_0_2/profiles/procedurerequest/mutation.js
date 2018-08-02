// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcedureRequestSchema = require('../../schemas/procedurerequest.schema');

// Inputs
const ProcedureRequestInput = require('../../inputs/procedurerequest.input');


const {
	procedurerequestCreateResolver,
	procedurerequestUpdateResolver,
	procedurerequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ProcedureRequest record.'
	},
	resource: {
		type: ProcedureRequestInput,
		description: 'ProcedureRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ProcedureRequest record for deletion.'
	}
};

/**
 * @name exports.ProcedureRequestCreateMutation
 * @summary ProcedureRequestCreate Mutation.
 */
module.exports.ProcedureRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ProcedureRequest',
	resolve: procedurerequestCreateResolver,
	type: ProcedureRequestSchema
};

/**
 * @name exports.ProcedureRequestUpdateMutation
 * @summary ProcedureRequestUpdate Mutation.
 */
module.exports.ProcedureRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ProcedureRequests',
	resolve: procedurerequestUpdateResolver,
	type: ProcedureRequestSchema
};

/**
 * @name exports.ProcedureRequestDeleteMutation
 * @summary ProcedureRequestDelete Mutation.
 */
module.exports.ProcedureRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ProcedureRequest',
	resolve: procedurerequestDeleteResolver,
	type: ProcedureRequestSchema
};
