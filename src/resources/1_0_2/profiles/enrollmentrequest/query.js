// Schemas
const EnrollmentRequestSchema = require('../../schemas/enrollmentrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EnrollmentRequestArgs = require('../../parameters/enrollmentrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	enrollmentrequestResolver,
	enrollmentrequestListResolver,
	enrollmentrequestInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EnrollmentRequest',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.EnrollmentRequestQuery
 * @summary EnrollmentRequest Query.
 */
module.exports.EnrollmentRequestQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentRequestArgs),
	description: 'Query for a single EnrollmentRequest',
	resolve: scopeInvariant(scopeOptions, enrollmentrequestResolver),
	type: EnrollmentRequestSchema
};

/**
 * @name exports.EnrollmentRequestListQuery
 * @summary EnrollmentRequestList Query.
 */
module.exports.EnrollmentRequestListQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentRequestArgs),
	description: 'Query for multiple EnrollmentRequests',
	resolve: scopeInvariant(scopeOptions, enrollmentrequestListResolver),
	type: BundleSchema
};

/**
 * @name exports.EnrollmentRequestInstanceQuery
 * @summary EnrollmentRequestInstance Query.
 */
module.exports.EnrollmentRequestInstanceQuery = {
	description: 'Get information about a single EnrollmentRequest',
	resolve: scopeInvariant(scopeOptions, enrollmentrequestInstanceResolver),
	type: EnrollmentRequestSchema
};
