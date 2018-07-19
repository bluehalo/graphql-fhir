// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const EnrollmentRequestSchema = require('../../schemas/enrollmentrequest.schema');

// Arguments
const EnrollmentRequestArgs = require('../../parameters/enrollmentrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	enrollmentrequestResolver,
	enrollmentrequestListResolver,
	enrollmentrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.EnrollmentRequestQuery
 * @summary EnrollmentRequest Query.
 */
module.exports.EnrollmentRequestQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentRequestArgs),
	description: 'Query for a single EnrollmentRequest',
	resolve: enrollmentrequestResolver,
	type: EnrollmentRequestSchema
};

/**
 * @name exports.EnrollmentRequestListQuery
 * @summary EnrollmentRequestList Query.
 */
module.exports.EnrollmentRequestListQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentRequestArgs),
	description: 'Query for multiple EnrollmentRequests',
	resolve: enrollmentrequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.EnrollmentRequestInstanceQuery
 * @summary EnrollmentRequestInstance Query.
 */
module.exports.EnrollmentRequestInstanceQuery = {
	description: 'Get information about a single EnrollmentRequest',
	resolve: enrollmentrequestInstanceResolver,
	type: EnrollmentRequestSchema
};
