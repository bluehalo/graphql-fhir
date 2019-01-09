// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const QuestionnaireResponseSchema = require('../../schemas/questionnaireresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const QuestionnaireResponseArgs = require('../../parameters/questionnaireresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	QuestionnaireResponseArgs,
);

// Resolvers
const {
	getQuestionnaireResponse,
	getQuestionnaireResponseList,
	getQuestionnaireResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'QuestionnaireResponse',
	action: 'read',
};

/**
 * @name exports.QuestionnaireResponseQuery
 * @summary QuestionnaireResponse query.
 */
module.exports.QuestionnaireResponseQuery = {
	description: 'Query for a single QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, getQuestionnaireResponse),
	type: QuestionnaireResponseSchema,
	args: args,
};

/**
 * @name exports.QuestionnaireResponseListQuery
 * @summary QuestionnaireResponse query.
 */
module.exports.QuestionnaireResponseListQuery = {
	description: 'Query for a more than or just one QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, getQuestionnaireResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.QuestionnaireResponseInstanceQuery
 * @summary QuestionnaireResponse query.
 */
module.exports.QuestionnaireResponseInstanceQuery = {
	description: 'Access information about a single QuestionnaireResponse',
	resolve: scopeInvariant(scopeOptions, getQuestionnaireResponseInstance),
	type: QuestionnaireResponseSchema,
	args: args,
};
