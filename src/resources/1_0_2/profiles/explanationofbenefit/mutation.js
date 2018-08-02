// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ExplanationOfBenefitSchema = require('../../schemas/explanationofbenefit.schema');

// Inputs
const ExplanationOfBenefitInput = require('../../inputs/explanationofbenefit.input');


const {
	explanationofbenefitCreateResolver,
	explanationofbenefitUpdateResolver,
	explanationofbenefitDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ExplanationOfBenefit record.'
	},
	resource: {
		type: ExplanationOfBenefitInput,
		description: 'ExplanationOfBenefit Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: explanationofbenefitCreateResolver,
	type: ExplanationOfBenefitSchema
};

/**
 * @name exports.ExplanationOfBenefitUpdateMutation
 * @summary ExplanationOfBenefitUpdate Mutation.
 */
module.exports.ExplanationOfBenefitUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ExplanationOfBenefits',
	resolve: explanationofbenefitUpdateResolver,
	type: ExplanationOfBenefitSchema
};

/**
 * @name exports.ExplanationOfBenefitDeleteMutation
 * @summary ExplanationOfBenefitDelete Mutation.
 */
module.exports.ExplanationOfBenefitDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ExplanationOfBenefit',
	resolve: explanationofbenefitDeleteResolver,
	type: ExplanationOfBenefitSchema
};
