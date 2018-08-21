// Schemas
const QuestionnaireResponseSchema = require('../../schemas/questionnaireresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const QuestionnaireResponseArgs = require('../../parameters/questionnaireresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	questionnaireresponseResolver,
	questionnaireresponseListResolver,
	questionnaireresponseInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'QuestionnaireResponse',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.QuestionnaireResponseQuery
 * @summary QuestionnaireResponse Query.
 */
module.exports.QuestionnaireResponseQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireResponseArgs),
	description: 'Query for a single QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, questionnaireresponseResolver),
	type: QuestionnaireResponseSchema
};

/**
 * @name exports.QuestionnaireResponseListQuery
 * @summary QuestionnaireResponseList Query.
 */
module.exports.QuestionnaireResponseListQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireResponseArgs),
	description: 'Query for multiple QuestionnaireResponses',
	resolve: scopeInvariant(scopeOptions, questionnaireresponseListResolver),
	type: BundleSchema
};

/**
 * @name exports.QuestionnaireResponseInstanceQuery
 * @summary QuestionnaireResponseInstance Query.
 */
module.exports.QuestionnaireResponseInstanceQuery = {
	description: 'Get information about a single QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, questionnaireresponseInstanceResolver),
	type: QuestionnaireResponseSchema
};
