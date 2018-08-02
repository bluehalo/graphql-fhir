// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcessRequestSchema = require('../../schemas/processrequest.schema');

// Inputs
const ProcessRequestInput = require('../../inputs/processrequest.input');


const {
	processrequestCreateResolver,
	processrequestUpdateResolver,
	processrequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ProcessRequest record.'
	},
	resource: {
		type: ProcessRequestInput,
		description: 'ProcessRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ProcessRequest record for deletion.'
	}
};

/**
 * @name exports.ProcessRequestCreateMutation
 * @summary ProcessRequestCreate Mutation.
 */
module.exports.ProcessRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ProcessRequest',
	resolve: processrequestCreateResolver,
	type: ProcessRequestSchema
};

/**
 * @name exports.ProcessRequestUpdateMutation
 * @summary ProcessRequestUpdate Mutation.
 */
module.exports.ProcessRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ProcessRequests',
	resolve: processrequestUpdateResolver,
	type: ProcessRequestSchema
};

/**
 * @name exports.ProcessRequestDeleteMutation
 * @summary ProcessRequestDelete Mutation.
 */
module.exports.ProcessRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ProcessRequest',
	resolve: processrequestDeleteResolver,
	type: ProcessRequestSchema
};
