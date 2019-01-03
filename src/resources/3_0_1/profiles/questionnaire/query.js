// Schemas
const QuestionnaireSchema = require('../../schemas/questionnaire.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const QuestionnaireArgs = require('../../parameters/questionnaire.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	questionnaireResolver,
	questionnaireListResolver,
	questionnaireInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Questionnaire',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.QuestionnaireQuery
 * @summary Questionnaire Query.
 */
module.exports.QuestionnaireQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireArgs),
	description: 'Query for a single Questionnaire',
	resolve: scopeInvariant(scopeOptions, questionnaireResolver),
	type: QuestionnaireSchema,
};

/**
 * @name exports.QuestionnaireListQuery
 * @summary QuestionnaireList Query.
 */
module.exports.QuestionnaireListQuery = {
	args: Object.assign({}, CommonArgs, QuestionnaireArgs),
	description: 'Query for multiple Questionnaires',
	resolve: scopeInvariant(scopeOptions, questionnaireListResolver),
	type: BundleSchema,
};

/**
 * @name exports.QuestionnaireInstanceQuery
 * @summary QuestionnaireInstance Query.
 */
module.exports.QuestionnaireInstanceQuery = {
	description: 'Get information about a single Questionnaire',
	resolve: scopeInvariant(scopeOptions, questionnaireInstanceResolver),
	type: QuestionnaireSchema,
};
