// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ClinicalImpressionSchema = require('../../schemas/clinicalimpression.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ClinicalImpressionArgs = require('../../parameters/clinicalimpression.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ClinicalImpressionArgs);

// Resolvers
const {
	getClinicalImpression,
	getClinicalImpressionList,
	getClinicalImpressionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ClinicalImpression',
	action: 'read',
};

/**
 * @name exports.ClinicalImpressionQuery
 * @summary ClinicalImpression query.
 */
module.exports.ClinicalImpressionQuery = {
	description: 'Query for a single ClinicalImpression',
	resolve: scopeInvariant(scopeOptions, getClinicalImpression),
	type: ClinicalImpressionSchema,
	args: args,
};

/**
 * @name exports.ClinicalImpressionListQuery
 * @summary ClinicalImpression query.
 */
module.exports.ClinicalImpressionListQuery = {
	description: 'Query for a more than or just one ClinicalImpression',
	resolve: scopeInvariant(scopeOptions, getClinicalImpressionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ClinicalImpressionInstanceQuery
 * @summary ClinicalImpression query.
 */
module.exports.ClinicalImpressionInstanceQuery = {
	description: 'Access information about a single ClinicalImpression',
	resolve: scopeInvariant(scopeOptions, getClinicalImpressionInstance),
	type: ClinicalImpressionSchema,
	args: args,
};
