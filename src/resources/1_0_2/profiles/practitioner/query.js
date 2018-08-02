// Schemas
const PractitionerSchema = require('../../schemas/practitioner.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PractitionerArgs = require('../../parameters/practitioner.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	practitionerResolver,
	practitionerListResolver,
	practitionerInstanceResolver
} = require('./resolver');

/**
 * @name exports.PractitionerQuery
 * @summary Practitioner Query.
 */
module.exports.PractitionerQuery = {
	args: Object.assign({}, CommonArgs, PractitionerArgs),
	description: 'Query for a single Practitioner',
	resolve: practitionerResolver,
	type: PractitionerSchema
};

/**
 * @name exports.PractitionerListQuery
 * @summary PractitionerList Query.
 */
module.exports.PractitionerListQuery = {
	args: Object.assign({}, CommonArgs, PractitionerArgs),
	description: 'Query for multiple Practitioners',
	resolve: practitionerListResolver,
	type: BundleSchema
};

/**
 * @name exports.PractitionerInstanceQuery
 * @summary PractitionerInstance Query.
 */
module.exports.PractitionerInstanceQuery = {
	description: 'Get information about a single Practitioner',
	resolve: practitionerInstanceResolver,
	type: PractitionerSchema
};
