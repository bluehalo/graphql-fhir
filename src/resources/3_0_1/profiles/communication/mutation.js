// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CommunicationSchema = require('../../schemas/communication.schema');

// Inputs
const CommunicationInput = require('../../inputs/communication.input');


const {
	communicationCreateResolver,
	communicationUpdateResolver,
	communicationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Communication record.'
	},
	resource: {
		type: CommunicationInput,
		description: 'Communication Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Communication record for deletion.'
	}
};

/**
 * @name exports.CommunicationCreateMutation
 * @summary CommunicationCreate Mutation.
 */
module.exports.CommunicationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Communication',
	resolve: communicationCreateResolver,
	type: CommunicationSchema
};

/**
 * @name exports.CommunicationUpdateMutation
 * @summary CommunicationUpdate Mutation.
 */
module.exports.CommunicationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Communications',
	resolve: communicationUpdateResolver,
	type: CommunicationSchema
};

/**
 * @name exports.CommunicationDeleteMutation
 * @summary CommunicationDelete Mutation.
 */
module.exports.CommunicationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Communication',
	resolve: communicationDeleteResolver,
	type: CommunicationSchema
};
