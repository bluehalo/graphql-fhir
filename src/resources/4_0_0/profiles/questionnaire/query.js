// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const QuestionnaireSchema = require('../../schemas/questionnaire.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const QuestionnaireArgs = require('../../parameters/questionnaire.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	QuestionnaireArgs,
);

// Resolvers
const {
	getQuestionnaire,
	getQuestionnaireList,
	getQuestionnaireInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Questionnaire',
	action: 'read',
};

/**
 * @name exports.QuestionnaireQuery
 * @summary Questionnaire query.
 */
module.exports.QuestionnaireQuery = {
	description: 'Query for a single Questionnaire',
	resolve: scopeInvariant(scopeOptions, getQuestionnaire),
	type: QuestionnaireSchema,
	args: args,
};

/**
 * @name exports.QuestionnaireListQuery
 * @summary Questionnaire query.
 */
module.exports.QuestionnaireListQuery = {
	description: 'Query for a more than or just one Questionnaire',
	resolve: scopeInvariant(scopeOptions, getQuestionnaireList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.QuestionnaireInstanceQuery
 * @summary Questionnaire query.
 */
module.exports.QuestionnaireInstanceQuery = {
	description: 'Access information about a single Questionnaire',
	resolve: scopeInvariant(scopeOptions, getQuestionnaireInstance),
	type: QuestionnaireSchema,
	args: args,
};
