// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ExplanationOfBenefitSchema = require('../../schemas/explanationofbenefit.schema');

// Inputs
const ExplanationOfBenefitInput = require('../../inputs/explanationofbenefit.input');

// Resolvers
const {
	explanationofbenefitCreateResolver,
	explanationofbenefitUpdateResolver,
	explanationofbenefitDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ExplanationOfBenefit',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ExplanationOfBenefit record.'
	},
	resource: {
		type: new GraphQLNonNull(ExplanationOfBenefitInput),
		description: 'ExplanationOfBenefit Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ExplanationOfBenefit record for deletion.'
	}
};

/**
 * @name exports.ExplanationOfBenefitCreateMutation
 * @summary ExplanationOfBenefitCreate Mutation.
 */
module.exports.ExplanationOfBenefitCreateMutation = {
	args: WriteArgs,
	description: 'Create a ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, explanationofbenefitCreateResolver),
	type: ExplanationOfBenefitSchema
};

/**
 * @name exports.ExplanationOfBenefitUpdateMutation
 * @summary ExplanationOfBenefitUpdate Mutation.
 */
module.exports.ExplanationOfBenefitUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ExplanationOfBenefits',
	resolve: scopeInvariant(scopeOptions, explanationofbenefitUpdateResolver),
	type: ExplanationOfBenefitSchema
};

/**
 * @name exports.ExplanationOfBenefitDeleteMutation
 * @summary ExplanationOfBenefitDelete Mutation.
 */
module.exports.ExplanationOfBenefitDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, explanationofbenefitDeleteResolver),
	type: ExplanationOfBenefitSchema
};
