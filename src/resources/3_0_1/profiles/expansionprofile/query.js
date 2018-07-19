// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ExpansionProfileSchema = require('../../schemas/expansionprofile.schema');

// Arguments
const ExpansionProfileArgs = require('../../parameters/expansionprofile.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	expansionprofileResolver,
	expansionprofileListResolver,
	expansionprofileInstanceResolver
} = require('./resolver');

/**
 * @name exports.ExpansionProfileQuery
 * @summary ExpansionProfile Query.
 */
module.exports.ExpansionProfileQuery = {
	args: Object.assign({}, CommonArgs, ExpansionProfileArgs),
	description: 'Query for a single ExpansionProfile',
	resolve: expansionprofileResolver,
	type: ExpansionProfileSchema
};

/**
 * @name exports.ExpansionProfileListQuery
 * @summary ExpansionProfileList Query.
 */
module.exports.ExpansionProfileListQuery = {
	args: Object.assign({}, CommonArgs, ExpansionProfileArgs),
	description: 'Query for multiple ExpansionProfiles',
	resolve: expansionprofileListResolver,
	type: BundleSchema
};

/**
 * @name exports.ExpansionProfileInstanceQuery
 * @summary ExpansionProfileInstance Query.
 */
module.exports.ExpansionProfileInstanceQuery = {
	description: 'Get information about a single ExpansionProfile',
	resolve: expansionprofileInstanceResolver,
	type: ExpansionProfileSchema
};
