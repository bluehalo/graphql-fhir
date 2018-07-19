// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const QuestionnaireResponseSchema = require('../../schemas/questionnaireresponse.schema');

// Arguments
const QuestionnaireResponseArgs = require('../../parameters/questionnaireresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	questionnaireresponseResolver,
	questionnaireresponseListResolver,
	questionnaireresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.QuestionnaireResponseQuery
 * @summary QuestionnaireResponse Query.
 */
module.exports.QuestionnaireResponseQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireResponseArgs),
	description: 'Query for a single QuestionnaireResponse',
	resolve: questionnaireresponseResolver,
	type: QuestionnaireResponseSchema
};

/**
 * @name exports.QuestionnaireResponseListQuery
 * @summary QuestionnaireResponseList Query.
 */
module.exports.QuestionnaireResponseListQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireResponseArgs),
	description: 'Query for multiple QuestionnaireResponses',
	resolve: questionnaireresponseListResolver,
	type: BundleSchema
};

/**
 * @name exports.QuestionnaireResponseInstanceQuery
 * @summary QuestionnaireResponseInstance Query.
 */
module.exports.QuestionnaireResponseInstanceQuery = {
	description: 'Get information about a single QuestionnaireResponse',
	resolve: questionnaireresponseInstanceResolver,
	type: QuestionnaireResponseSchema
};
