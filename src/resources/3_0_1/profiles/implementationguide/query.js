// Schemas
const ImplementationGuideSchema = require('../../schemas/implementationguide.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImplementationGuideArgs = require('../../parameters/implementationguide.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	implementationguideResolver,
	implementationguideListResolver,
	implementationguideInstanceResolver
} = require('./resolver');

/**
 * @name exports.ImplementationGuideQuery
 * @summary ImplementationGuide Query.
 */
module.exports.ImplementationGuideQuery = {
	args: Object.assign({}, CommonArgs, ImplementationGuideArgs),
	description: 'Query for a single ImplementationGuide',
	resolve: implementationguideResolver,
	type: ImplementationGuideSchema
};

/**
 * @name exports.ImplementationGuideListQuery
 * @summary ImplementationGuideList Query.
 */
module.exports.ImplementationGuideListQuery = {
	args: Object.assign({}, CommonArgs, ImplementationGuideArgs),
	description: 'Query for multiple ImplementationGuides',
	resolve: implementationguideListResolver,
	type: BundleSchema
};

/**
 * @name exports.ImplementationGuideInstanceQuery
 * @summary ImplementationGuideInstance Query.
 */
module.exports.ImplementationGuideInstanceQuery = {
	description: 'Get information about a single ImplementationGuide',
	resolve: implementationguideInstanceResolver,
	type: ImplementationGuideSchema
};
