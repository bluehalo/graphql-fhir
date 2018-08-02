// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EnrollmentRequestSchema = require('../../schemas/enrollmentrequest.schema');

// Inputs
const EnrollmentRequestInput = require('../../inputs/enrollmentrequest.input');


const {
	enrollmentrequestCreateResolver,
	enrollmentrequestUpdateResolver,
	enrollmentrequestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a EnrollmentRequest record.'
	},
	resource: {
		type: EnrollmentRequestInput,
		description: 'EnrollmentRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a EnrollmentRequest record for deletion.'
	}
};

/**
 * @name exports.EnrollmentRequestCreateMutation
 * @summary EnrollmentRequestCreate Mutation.
 */
module.exports.EnrollmentRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a EnrollmentRequest',
	resolve: enrollmentrequestCreateResolver,
	type: EnrollmentRequestSchema
};

/**
 * @name exports.EnrollmentRequestUpdateMutation
 * @summary EnrollmentRequestUpdate Mutation.
 */
module.exports.EnrollmentRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EnrollmentRequests',
	resolve: enrollmentrequestUpdateResolver,
	type: EnrollmentRequestSchema
};

/**
 * @name exports.EnrollmentRequestDeleteMutation
 * @summary EnrollmentRequestDelete Mutation.
 */
module.exports.EnrollmentRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EnrollmentRequest',
	resolve: enrollmentrequestDeleteResolver,
	type: EnrollmentRequestSchema
};
