// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const RiskAssessmentSchema = require('../../schemas/riskassessment.schema');

// Inputs
const RiskAssessmentInput = require('../../inputs/riskassessment.input');

// Resolvers
const {
	riskassessmentCreateResolver,
	riskassessmentUpdateResolver,
	riskassessmentDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'RiskAssessment',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a RiskAssessment record.',
	},
	resource: {
		type: new GraphQLNonNull(RiskAssessmentInput),
		description: 'RiskAssessment Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a RiskAssessment record for deletion.',
	},
};

/**
 * @name exports.RiskAssessmentCreateMutation
 * @summary RiskAssessmentCreate Mutation.
 */
module.exports.RiskAssessmentCreateMutation = {
	args: WriteArgs,
	description: 'Create a RiskAssessment',
	resolve: scopeInvariant(scopeOptions, riskassessmentCreateResolver),
	type: RiskAssessmentSchema,
};

/**
 * @name exports.RiskAssessmentUpdateMutation
 * @summary RiskAssessmentUpdate Mutation.
 */
module.exports.RiskAssessmentUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple RiskAssessments',
	resolve: scopeInvariant(scopeOptions, riskassessmentUpdateResolver),
	type: RiskAssessmentSchema,
};

/**
 * @name exports.RiskAssessmentDeleteMutation
 * @summary RiskAssessmentDelete Mutation.
 */
module.exports.RiskAssessmentDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single RiskAssessment',
	resolve: scopeInvariant(scopeOptions, riskassessmentDeleteResolver),
	type: RiskAssessmentSchema,
};
