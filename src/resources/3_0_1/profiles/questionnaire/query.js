// Schemas
const QuestionnaireSchema = require('../../schemas/questionnaire.schema');

// Arguments
const QuestionnaireArgs = require('../../parameters/questionnaire.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	questionnaireResolver,
	questionnaireListResolver,
	questionnaireInstanceResolver
} = require('./resolver');

/**
 * @name exports.QuestionnaireQuery
 * @summary Questionnaire Query.
 */
module.exports.QuestionnaireQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireArgs),
	description: 'Query for a single Questionnaire',
	resolve: questionnaireResolver,
	type: QuestionnaireSchema
};

/**
 * @name exports.QuestionnaireListQuery
 * @summary QuestionnaireList Query.
 */
module.exports.QuestionnaireListQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireArgs),
	description: 'Query for multiple Questionnaires',
	resolve: questionnaireListResolver,
	type: new GraphQLList(QuestionnaireSchema)
};

/**
 * @name exports.QuestionnaireInstanceQuery
 * @summary QuestionnaireInstance Query.
 */
module.exports.QuestionnaireInstanceQuery = {
	description: 'Get information about a single Questionnaire',
	resolve: questionnaireInstanceResolver,
	type: QuestionnaireSchema
};
