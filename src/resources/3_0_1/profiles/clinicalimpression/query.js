// Schemas
const ClinicalImpressionSchema = require('../../schemas/clinicalimpression.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ClinicalImpressionArgs = require('../../parameters/clinicalimpression.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	clinicalimpressionResolver,
	clinicalimpressionListResolver,
	clinicalimpressionInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ClinicalImpression',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ClinicalImpressionQuery
 * @summary ClinicalImpression Query.
 */
module.exports.ClinicalImpressionQuery = {
	args: Object.assign({}, CommonArgs, ClinicalImpressionArgs),
	description: 'Query for a single ClinicalImpression',
	resolve: scopeInvariant(scopeOptions, clinicalimpressionResolver),
	type: ClinicalImpressionSchema
};

/**
 * @name exports.ClinicalImpressionListQuery
 * @summary ClinicalImpressionList Query.
 */
module.exports.ClinicalImpressionListQuery = {
	args: Object.assign({}, CommonArgs, ClinicalImpressionArgs),
	description: 'Query for multiple ClinicalImpressions',
	resolve: scopeInvariant(scopeOptions, clinicalimpressionListResolver),
	type: BundleSchema
};

/**
 * @name exports.ClinicalImpressionInstanceQuery
 * @summary ClinicalImpressionInstance Query.
 */
module.exports.ClinicalImpressionInstanceQuery = {
	description: 'Get information about a single ClinicalImpression',
	resolve: scopeInvariant(scopeOptions, clinicalimpressionInstanceResolver),
	type: ClinicalImpressionSchema
};
