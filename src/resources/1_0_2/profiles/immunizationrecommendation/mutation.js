// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImmunizationRecommendationSchema = require('../../schemas/immunizationrecommendation.schema');

// Inputs
const ImmunizationRecommendationInput = require('../../inputs/immunizationrecommendation.input');


const {
	immunizationrecommendationCreateResolver,
	immunizationrecommendationUpdateResolver,
	immunizationrecommendationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ImmunizationRecommendation record.'
	},
	resource: {
		type: ImmunizationRecommendationInput,
		description: 'ImmunizationRecommendation Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ImmunizationRecommendation record for deletion.'
	}
};

/**
 * @name exports.ImmunizationRecommendationCreateMutation
 * @summary ImmunizationRecommendationCreate Mutation.
 */
module.exports.ImmunizationRecommendationCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImmunizationRecommendation',
	resolve: immunizationrecommendationCreateResolver,
	type: ImmunizationRecommendationSchema
};

/**
 * @name exports.ImmunizationRecommendationUpdateMutation
 * @summary ImmunizationRecommendationUpdate Mutation.
 */
module.exports.ImmunizationRecommendationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImmunizationRecommendations',
	resolve: immunizationrecommendationUpdateResolver,
	type: ImmunizationRecommendationSchema
};

/**
 * @name exports.ImmunizationRecommendationDeleteMutation
 * @summary ImmunizationRecommendationDelete Mutation.
 */
module.exports.ImmunizationRecommendationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImmunizationRecommendation',
	resolve: immunizationrecommendationDeleteResolver,
	type: ImmunizationRecommendationSchema
};
