// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ReferralRequestSchema = require('../../schemas/referralrequest.schema');

// Inputs
const ReferralRequestInput = require('../../inputs/referralrequest.input');

// Resolvers
const {
	referralrequestCreateResolver,
	referralrequestUpdateResolver,
	referralrequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ReferralRequest',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ReferralRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(ReferralRequestInput),
		description: 'ReferralRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ReferralRequest record for deletion.'
	}
};

/**
 * @name exports.ReferralRequestCreateMutation
 * @summary ReferralRequestCreate Mutation.
 */
module.exports.ReferralRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ReferralRequest',
	resolve: scopeInvariant(scopeOptions, referralrequestCreateResolver),
	type: ReferralRequestSchema
};

/**
 * @name exports.ReferralRequestUpdateMutation
 * @summary ReferralRequestUpdate Mutation.
 */
module.exports.ReferralRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ReferralRequests',
	resolve: scopeInvariant(scopeOptions, referralrequestUpdateResolver),
	type: ReferralRequestSchema
};

/**
 * @name exports.ReferralRequestDeleteMutation
 * @summary ReferralRequestDelete Mutation.
 */
module.exports.ReferralRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ReferralRequest',
	resolve: scopeInvariant(scopeOptions, referralrequestDeleteResolver),
	type: ReferralRequestSchema
};
