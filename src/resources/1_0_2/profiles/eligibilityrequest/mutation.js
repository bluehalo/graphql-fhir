// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EligibilityRequestSchema = require('../../schemas/eligibilityrequest.schema');

// Inputs
const EligibilityRequestInput = require('../../inputs/eligibilityrequest.input');


const {
	eligibilityrequestCreateResolver,
	eligibilityrequestUpdateResolver,
	eligibilityrequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a EligibilityRequest record.'
	},
	resource: {
		type: EligibilityRequestInput,
		description: 'EligibilityRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a EligibilityRequest record for deletion.'
	}
};

/**
 * @name exports.EligibilityRequestCreateMutation
 * @summary EligibilityRequestCreate Mutation.
 */
module.exports.EligibilityRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a EligibilityRequest',
	resolve: eligibilityrequestCreateResolver,
	type: EligibilityRequestSchema
};

/**
 * @name exports.EligibilityRequestUpdateMutation
 * @summary EligibilityRequestUpdate Mutation.
 */
module.exports.EligibilityRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EligibilityRequests',
	resolve: eligibilityrequestUpdateResolver,
	type: EligibilityRequestSchema
};

/**
 * @name exports.EligibilityRequestDeleteMutation
 * @summary EligibilityRequestDelete Mutation.
 */
module.exports.EligibilityRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EligibilityRequest',
	resolve: eligibilityrequestDeleteResolver,
	type: EligibilityRequestSchema
};
