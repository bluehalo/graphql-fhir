// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const QuestionnaireResponseSchema = require('../../schemas/questionnaireresponse.schema');

// Inputs
const QuestionnaireResponseInput = require('../../inputs/questionnaireresponse.input');


const {
	questionnaireresponseCreateResolver,
	questionnaireresponseUpdateResolver,
	questionnaireresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a QuestionnaireResponse record.'
	},
	resource: {
		type: QuestionnaireResponseInput,
		description: 'QuestionnaireResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a QuestionnaireResponse record for deletion.'
	}
};

/**
 * @name exports.QuestionnaireResponseCreateMutation
 * @summary QuestionnaireResponseCreate Mutation.
 */
module.exports.QuestionnaireResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a QuestionnaireResponse',
	resolve: questionnaireresponseCreateResolver,
	type: QuestionnaireResponseSchema
};

/**
 * @name exports.QuestionnaireResponseUpdateMutation
 * @summary QuestionnaireResponseUpdate Mutation.
 */
module.exports.QuestionnaireResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple QuestionnaireResponses',
	resolve: questionnaireresponseUpdateResolver,
	type: QuestionnaireResponseSchema
};

/**
 * @name exports.QuestionnaireResponseDeleteMutation
 * @summary QuestionnaireResponseDelete Mutation.
 */
module.exports.QuestionnaireResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single QuestionnaireResponse',
	resolve: questionnaireresponseDeleteResolver,
	type: QuestionnaireResponseSchema
};
