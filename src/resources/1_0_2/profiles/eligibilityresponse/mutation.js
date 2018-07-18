// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EligibilityResponseSchema = require('../../schemas/eligibilityresponse.schema');

// Inputs
const EligibilityResponseInput = require('../../inputs/eligibilityresponse.input');


const {
	eligibilityresponseCreateResolver,
	eligibilityresponseUpdateResolver,
	eligibilityresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a EligibilityResponse record.'
	},
	resource: {
		type: EligibilityResponseInput,
		description: 'EligibilityResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a EligibilityResponse record for deletion.'
	}
};

/**
 * @name exports.EligibilityResponseCreateMutation
 * @summary EligibilityResponseCreate Mutation.
 */
module.exports.EligibilityResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a EligibilityResponse',
	resolve: eligibilityresponseCreateResolver,
	type: EligibilityResponseSchema
};

/**
 * @name exports.EligibilityResponseUpdateMutation
 * @summary EligibilityResponseUpdate Mutation.
 */
module.exports.EligibilityResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EligibilityResponses',
	resolve: eligibilityresponseUpdateResolver,
	type: EligibilityResponseSchema
};

/**
 * @name exports.EligibilityResponseDeleteMutation
 * @summary EligibilityResponseDelete Mutation.
 */
module.exports.EligibilityResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EligibilityResponse',
	resolve: eligibilityresponseDeleteResolver,
	type: EligibilityResponseSchema
};
