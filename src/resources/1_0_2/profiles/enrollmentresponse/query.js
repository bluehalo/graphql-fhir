// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EnrollmentResponseSchema = require('../../schemas/enrollmentresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EnrollmentResponseArgs = require('../../parameters/enrollmentresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, EnrollmentResponseArgs);

// Resolvers
const {
	getEnrollmentResponse,
	getEnrollmentResponseList,
	getEnrollmentResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EnrollmentResponse',
	action: 'read',
};

/**
 * @name exports.EnrollmentResponseQuery
 * @summary EnrollmentResponse query.
 */
module.exports.EnrollmentResponseQuery = {
	description: 'Query for a single EnrollmentResponse',
	resolve: scopeInvariant(scopeOptions, getEnrollmentResponse),
	type: EnrollmentResponseSchema,
	args: args,
};

/**
 * @name exports.EnrollmentResponseListQuery
 * @summary EnrollmentResponse query.
 */
module.exports.EnrollmentResponseListQuery = {
	description: 'Query for a more than or just one EnrollmentResponse',
	resolve: scopeInvariant(scopeOptions, getEnrollmentResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EnrollmentResponseInstanceQuery
 * @summary EnrollmentResponse query.
 */
module.exports.EnrollmentResponseInstanceQuery = {
	description: 'Access information about a single EnrollmentResponse',
	resolve: scopeInvariant(scopeOptions, getEnrollmentResponseInstance),
	type: EnrollmentResponseSchema,
	args: args,
};
