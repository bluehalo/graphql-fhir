// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcessResponseSchema = require('../../schemas/processresponse.schema');

// Inputs
const ProcessResponseInput = require('../../inputs/processresponse.input');


const {
	processresponseCreateResolver,
	processresponseUpdateResolver,
	processresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ProcessResponse record.'
	},
	resource: {
		type: ProcessResponseInput,
		description: 'ProcessResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ProcessResponse record for deletion.'
	}
};

/**
 * @name exports.ProcessResponseCreateMutation
 * @summary ProcessResponseCreate Mutation.
 */
module.exports.ProcessResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a ProcessResponse',
	resolve: processresponseCreateResolver,
	type: ProcessResponseSchema
};

/**
 * @name exports.ProcessResponseUpdateMutation
 * @summary ProcessResponseUpdate Mutation.
 */
module.exports.ProcessResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ProcessResponses',
	resolve: processresponseUpdateResolver,
	type: ProcessResponseSchema
};

/**
 * @name exports.ProcessResponseDeleteMutation
 * @summary ProcessResponseDelete Mutation.
 */
module.exports.ProcessResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ProcessResponse',
	resolve: processresponseDeleteResolver,
	type: ProcessResponseSchema
};
