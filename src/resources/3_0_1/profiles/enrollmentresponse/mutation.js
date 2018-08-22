// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EnrollmentResponseSchema = require('../../schemas/enrollmentresponse.schema');

// Inputs
const EnrollmentResponseInput = require('../../inputs/enrollmentresponse.input');

// Resolvers
const {
	enrollmentresponseCreateResolver,
	enrollmentresponseUpdateResolver,
	enrollmentresponseDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EnrollmentResponse',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a EnrollmentResponse record.'
	},
	resource: {
		type: new GraphQLNonNull(EnrollmentResponseInput),
		description: 'EnrollmentResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, enrollmentresponseCreateResolver),
	type: EnrollmentResponseSchema
};

/**
 * @name exports.EnrollmentResponseUpdateMutation
 * @summary EnrollmentResponseUpdate Mutation.
 */
module.exports.EnrollmentResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EnrollmentResponses',
	resolve: scopeInvariant(scopeOptions, enrollmentresponseUpdateResolver),
	type: EnrollmentResponseSchema
};

/**
 * @name exports.EnrollmentResponseDeleteMutation
 * @summary EnrollmentResponseDelete Mutation.
 */
module.exports.EnrollmentResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EnrollmentResponse',
	resolve: scopeInvariant(scopeOptions, enrollmentresponseDeleteResolver),
	type: EnrollmentResponseSchema
};
