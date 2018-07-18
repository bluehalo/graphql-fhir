// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const QuestionnaireSchema = require('../../schemas/questionnaire.schema');

// Inputs
const QuestionnaireInput = require('../../inputs/questionnaire.input');


const {
	questionnaireCreateResolver,
	questionnaireUpdateResolver,
	questionnaireDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Questionnaire record.'
	},
	resource: {
		type: QuestionnaireInput,
		description: 'Questionnaire Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Questionnaire record for deletion.'
	}
};

/**
 * @name exports.QuestionnaireCreateMutation
 * @summary QuestionnaireCreate Mutation.
 */
module.exports.QuestionnaireCreateMutation = {
	args: WriteArgs,
	description: 'Create a Questionnaire',
	resolve: questionnaireCreateResolver,
	type: QuestionnaireSchema
};

/**
 * @name exports.QuestionnaireUpdateMutation
 * @summary QuestionnaireUpdate Mutation.
 */
module.exports.QuestionnaireUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Questionnaires',
	resolve: questionnaireUpdateResolver,
	type: QuestionnaireSchema
};

/**
 * @name exports.QuestionnaireDeleteMutation
 * @summary QuestionnaireDelete Mutation.
 */
module.exports.QuestionnaireDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Questionnaire',
	resolve: questionnaireDeleteResolver,
	type: QuestionnaireSchema
};
