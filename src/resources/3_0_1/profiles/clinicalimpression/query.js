// Schemas
const ClinicalImpressionSchema = require('../../schemas/clinicalimpression.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ClinicalImpressionArgs = require('../../parameters/clinicalimpression.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	clinicalimpressionResolver,
	clinicalimpressionListResolver,
	clinicalimpressionInstanceResolver
} = require('./resolver');

/**
 * @name exports.ClinicalImpressionQuery
 * @summary ClinicalImpression Query.
 */
module.exports.ClinicalImpressionQuery = {
	args: Object.assign({}, CommonArgs, ClinicalImpressionArgs),
	description: 'Query for a single ClinicalImpression',
	resolve: clinicalimpressionResolver,
	type: ClinicalImpressionSchema
};

/**
 * @name exports.ClinicalImpressionListQuery
 * @summary ClinicalImpressionList Query.
 */
module.exports.ClinicalImpressionListQuery = {
	args: Object.assign({}, CommonArgs, ClinicalImpressionArgs),
	description: 'Query for multiple ClinicalImpressions',
	resolve: clinicalimpressionListResolver,
	type: BundleSchema
};

/**
 * @name exports.ClinicalImpressionInstanceQuery
 * @summary ClinicalImpressionInstance Query.
 */
module.exports.ClinicalImpressionInstanceQuery = {
	description: 'Get information about a single ClinicalImpression',
	resolve: clinicalimpressionInstanceResolver,
	type: ClinicalImpressionSchema
};
