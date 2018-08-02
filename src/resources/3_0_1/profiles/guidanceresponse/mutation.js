// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const GuidanceResponseSchema = require('../../schemas/guidanceresponse.schema');

// Inputs
const GuidanceResponseInput = require('../../inputs/guidanceresponse.input');


const {
	guidanceresponseCreateResolver,
	guidanceresponseUpdateResolver,
	guidanceresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a GuidanceResponse record.'
	},
	resource: {
		type: GuidanceResponseInput,
		description: 'GuidanceResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a GuidanceResponse record for deletion.'
	}
};

/**
 * @name exports.GuidanceResponseCreateMutation
 * @summary GuidanceResponseCreate Mutation.
 */
module.exports.GuidanceResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a GuidanceResponse',
	resolve: guidanceresponseCreateResolver,
	type: GuidanceResponseSchema
};

/**
 * @name exports.GuidanceResponseUpdateMutation
 * @summary GuidanceResponseUpdate Mutation.
 */
module.exports.GuidanceResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple GuidanceResponses',
	resolve: guidanceresponseUpdateResolver,
	type: GuidanceResponseSchema
};

/**
 * @name exports.GuidanceResponseDeleteMutation
 * @summary GuidanceResponseDelete Mutation.
 */
module.exports.GuidanceResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single GuidanceResponse',
	resolve: guidanceresponseDeleteResolver,
	type: GuidanceResponseSchema
};
