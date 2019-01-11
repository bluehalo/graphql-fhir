// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EnrollmentRequestSchema = require('../../schemas/enrollmentrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EnrollmentRequestArgs = require('../../parameters/enrollmentrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, EnrollmentRequestArgs);

// Resolvers
const {
	getEnrollmentRequest,
	getEnrollmentRequestList,
	getEnrollmentRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EnrollmentRequest',
	action: 'read',
};

/**
 * @name exports.EnrollmentRequestQuery
 * @summary EnrollmentRequest query.
 */
module.exports.EnrollmentRequestQuery = {
	description: 'Query for a single EnrollmentRequest',
	resolve: scopeInvariant(scopeOptions, getEnrollmentRequest),
	type: EnrollmentRequestSchema,
	args: args,
};

/**
 * @name exports.EnrollmentRequestListQuery
 * @summary EnrollmentRequest query.
 */
module.exports.EnrollmentRequestListQuery = {
	description: 'Query for a more than or just one EnrollmentRequest',
	resolve: scopeInvariant(scopeOptions, getEnrollmentRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EnrollmentRequestInstanceQuery
 * @summary EnrollmentRequest query.
 */
module.exports.EnrollmentRequestInstanceQuery = {
	description: 'Access information about a single EnrollmentRequest',
	resolve: scopeInvariant(scopeOptions, getEnrollmentRequestInstance),
	type: EnrollmentRequestSchema,
	args: args,
};
