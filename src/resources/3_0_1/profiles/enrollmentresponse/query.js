// Schemas
const EnrollmentResponseSchema = require('../../schemas/enrollmentresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EnrollmentResponseArgs = require('../../parameters/enrollmentresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	enrollmentresponseResolver,
	enrollmentresponseListResolver,
	enrollmentresponseInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EnrollmentResponse',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.EnrollmentResponseQuery
 * @summary EnrollmentResponse Query.
 */
module.exports.EnrollmentResponseQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentResponseArgs),
	description: 'Query for a single EnrollmentResponse',
	resolve: scopeInvariant(scopeOptions, enrollmentresponseResolver),
	type: EnrollmentResponseSchema
};

/**
 * @name exports.EnrollmentResponseListQuery
 * @summary EnrollmentResponseList Query.
 */
module.exports.EnrollmentResponseListQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentResponseArgs),
	description: 'Query for multiple EnrollmentResponses',
	resolve: scopeInvariant(scopeOptions, enrollmentresponseListResolver),
	type: BundleSchema
};

/**
 * @name exports.EnrollmentResponseInstanceQuery
 * @summary EnrollmentResponseInstance Query.
 */
module.exports.EnrollmentResponseInstanceQuery = {
	description: 'Get information about a single EnrollmentResponse',
	resolve: scopeInvariant(scopeOptions, enrollmentresponseInstanceResolver),
	type: EnrollmentResponseSchema
};
