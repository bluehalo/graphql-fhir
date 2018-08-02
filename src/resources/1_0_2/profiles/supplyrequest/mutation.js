// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SupplyRequestSchema = require('../../schemas/supplyrequest.schema');

// Inputs
const SupplyRequestInput = require('../../inputs/supplyrequest.input');


const {
	supplyrequestCreateResolver,
	supplyrequestUpdateResolver,
	supplyrequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a SupplyRequest record.'
	},
	resource: {
		type: SupplyRequestInput,
		description: 'SupplyRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a SupplyRequest record for deletion.'
	}
};

/**
 * @name exports.SupplyRequestCreateMutation
 * @summary SupplyRequestCreate Mutation.
 */
module.exports.SupplyRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a SupplyRequest',
	resolve: supplyrequestCreateResolver,
	type: SupplyRequestSchema
};

/**
 * @name exports.SupplyRequestUpdateMutation
 * @summary SupplyRequestUpdate Mutation.
 */
module.exports.SupplyRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple SupplyRequests',
	resolve: supplyrequestUpdateResolver,
	type: SupplyRequestSchema
};

/**
 * @name exports.SupplyRequestDeleteMutation
 * @summary SupplyRequestDelete Mutation.
 */
module.exports.SupplyRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single SupplyRequest',
	resolve: supplyrequestDeleteResolver,
	type: SupplyRequestSchema
};
