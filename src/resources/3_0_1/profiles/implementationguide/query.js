// Schemas
const ImplementationGuideSchema = require('../../schemas/implementationguide.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImplementationGuideArgs = require('../../parameters/implementationguide.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	implementationguideResolver,
	implementationguideListResolver,
	implementationguideInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImplementationGuide',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ImplementationGuideQuery
 * @summary ImplementationGuide Query.
 */
module.exports.ImplementationGuideQuery = {
	args: Object.assign({}, CommonArgs, ImplementationGuideArgs),
	description: 'Query for a single ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, implementationguideResolver),
	type: ImplementationGuideSchema
};

/**
 * @name exports.ImplementationGuideListQuery
 * @summary ImplementationGuideList Query.
 */
module.exports.ImplementationGuideListQuery = {
	args: Object.assign({}, CommonArgs, ImplementationGuideArgs),
	description: 'Query for multiple ImplementationGuides',
	resolve: scopeInvariant(scopeOptions, implementationguideListResolver),
	type: BundleSchema
};

/**
 * @name exports.ImplementationGuideInstanceQuery
 * @summary ImplementationGuideInstance Query.
 */
module.exports.ImplementationGuideInstanceQuery = {
	description: 'Get information about a single ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, implementationguideInstanceResolver),
	type: ImplementationGuideSchema
};
