// Schemas
const ExpansionProfileSchema = require('../../schemas/expansionprofile.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ExpansionProfileArgs = require('../../parameters/expansionprofile.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	expansionprofileResolver,
	expansionprofileListResolver,
	expansionprofileInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ExpansionProfile',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ExpansionProfileQuery
 * @summary ExpansionProfile Query.
 */
module.exports.ExpansionProfileQuery = {
	args: Object.assign({}, CommonArgs, ExpansionProfileArgs),
	description: 'Query for a single ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, expansionprofileResolver),
	type: ExpansionProfileSchema
};

/**
 * @name exports.ExpansionProfileListQuery
 * @summary ExpansionProfileList Query.
 */
module.exports.ExpansionProfileListQuery = {
	args: Object.assign({}, CommonArgs, ExpansionProfileArgs),
	description: 'Query for multiple ExpansionProfiles',
	resolve: scopeInvariant(scopeOptions, expansionprofileListResolver),
	type: BundleSchema
};

/**
 * @name exports.ExpansionProfileInstanceQuery
 * @summary ExpansionProfileInstance Query.
 */
module.exports.ExpansionProfileInstanceQuery = {
	description: 'Get information about a single ExpansionProfile',
	resolve: scopeInvariant(scopeOptions, expansionprofileInstanceResolver),
	type: ExpansionProfileSchema
};
