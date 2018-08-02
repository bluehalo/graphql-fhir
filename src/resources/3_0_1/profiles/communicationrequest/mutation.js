// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CommunicationRequestSchema = require('../../schemas/communicationrequest.schema');

// Inputs
const CommunicationRequestInput = require('../../inputs/communicationrequest.input');


const {
	communicationrequestCreateResolver,
	communicationrequestUpdateResolver,
	communicationrequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CommunicationRequest record.'
	},
	resource: {
		type: CommunicationRequestInput,
		description: 'CommunicationRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a CommunicationRequest record for deletion.'
	}
};

/**
 * @name exports.CommunicationRequestCreateMutation
 * @summary CommunicationRequestCreate Mutation.
 */
module.exports.CommunicationRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a CommunicationRequest',
	resolve: communicationrequestCreateResolver,
	type: CommunicationRequestSchema
};

/**
 * @name exports.CommunicationRequestUpdateMutation
 * @summary CommunicationRequestUpdate Mutation.
 */
module.exports.CommunicationRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CommunicationRequests',
	resolve: communicationrequestUpdateResolver,
	type: CommunicationRequestSchema
};

/**
 * @name exports.CommunicationRequestDeleteMutation
 * @summary CommunicationRequestDelete Mutation.
 */
module.exports.CommunicationRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CommunicationRequest',
	resolve: communicationrequestDeleteResolver,
	type: CommunicationRequestSchema
};
