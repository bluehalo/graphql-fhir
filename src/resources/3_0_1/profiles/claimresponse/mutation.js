// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ClaimResponseSchema = require('../../schemas/claimresponse.schema');

// Inputs
const ClaimResponseInput = require('../../inputs/claimresponse.input');


const {
	claimresponseCreateResolver,
	claimresponseUpdateResolver,
	claimresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ClaimResponse record.'
	},
	resource: {
		type: ClaimResponseInput,
		description: 'ClaimResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ClaimResponse record for deletion.'
	}
};

/**
 * @name exports.ClaimResponseCreateMutation
 * @summary ClaimResponseCreate Mutation.
 */
module.exports.ClaimResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a ClaimResponse',
	resolve: claimresponseCreateResolver,
	type: ClaimResponseSchema
};

/**
 * @name exports.ClaimResponseUpdateMutation
 * @summary ClaimResponseUpdate Mutation.
 */
module.exports.ClaimResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ClaimResponses',
	resolve: claimresponseUpdateResolver,
	type: ClaimResponseSchema
};

/**
 * @name exports.ClaimResponseDeleteMutation
 * @summary ClaimResponseDelete Mutation.
 */
module.exports.ClaimResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ClaimResponse',
	resolve: claimresponseDeleteResolver,
	type: ClaimResponseSchema
};
