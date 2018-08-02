// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EnrollmentResponseSchema = require('../../schemas/enrollmentresponse.schema');

// Inputs
const EnrollmentResponseInput = require('../../inputs/enrollmentresponse.input');


const {
	enrollmentresponseCreateResolver,
	enrollmentresponseUpdateResolver,
	enrollmentresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a EnrollmentResponse record.'
	},
	resource: {
		type: EnrollmentResponseInput,
		description: 'EnrollmentResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a EnrollmentResponse record for deletion.'
	}
};

/**
 * @name exports.EnrollmentResponseCreateMutation
 * @summary EnrollmentResponseCreate Mutation.
 */
module.exports.EnrollmentResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a EnrollmentResponse',
	resolve: enrollmentresponseCreateResolver,
	type: EnrollmentResponseSchema
};

/**
 * @name exports.EnrollmentResponseUpdateMutation
 * @summary EnrollmentResponseUpdate Mutation.
 */
module.exports.EnrollmentResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EnrollmentResponses',
	resolve: enrollmentresponseUpdateResolver,
	type: EnrollmentResponseSchema
};

/**
 * @name exports.EnrollmentResponseDeleteMutation
 * @summary EnrollmentResponseDelete Mutation.
 */
module.exports.EnrollmentResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EnrollmentResponse',
	resolve: enrollmentresponseDeleteResolver,
	type: EnrollmentResponseSchema
};
