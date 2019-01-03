// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EligibilityRequestSchema = require('../../schemas/eligibilityrequest.schema');

// Inputs
const EligibilityRequestInput = require('../../inputs/eligibilityrequest.input');

// Resolvers
const {
	eligibilityrequestCreateResolver,
	eligibilityrequestUpdateResolver,
	eligibilityrequestDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EligibilityRequest',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a EligibilityRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(EligibilityRequestInput),
		description: 'EligibilityRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a EligibilityRequest record for deletion.',
	},
};

/**
 * @name exports.EligibilityRequestCreateMutation
 * @summary EligibilityRequestCreate Mutation.
 */
module.exports.EligibilityRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, eligibilityrequestCreateResolver),
	type: EligibilityRequestSchema,
};

/**
 * @name exports.EligibilityRequestUpdateMutation
 * @summary EligibilityRequestUpdate Mutation.
 */
module.exports.EligibilityRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EligibilityRequests',
	resolve: scopeInvariant(scopeOptions, eligibilityrequestUpdateResolver),
	type: EligibilityRequestSchema,
};

/**
 * @name exports.EligibilityRequestDeleteMutation
 * @summary EligibilityRequestDelete Mutation.
 */
module.exports.EligibilityRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, eligibilityrequestDeleteResolver),
	type: EligibilityRequestSchema,
};
