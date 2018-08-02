// Schemas
const EncounterSchema = require('../../schemas/encounter.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EncounterArgs = require('../../parameters/encounter.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	encounterResolver,
	encounterListResolver,
	encounterInstanceResolver
} = require('./resolver');

/**
 * @name exports.EncounterQuery
 * @summary Encounter Query.
 */
module.exports.EncounterQuery = {
	args: Object.assign({}, CommonArgs, EncounterArgs),
	description: 'Query for a single Encounter',
	resolve: encounterResolver,
	type: EncounterSchema
};

/**
 * @name exports.EncounterListQuery
 * @summary EncounterList Query.
 */
module.exports.EncounterListQuery = {
	args: Object.assign({}, CommonArgs, EncounterArgs),
	description: 'Query for multiple Encounters',
	resolve: encounterListResolver,
	type: BundleSchema
};

/**
 * @name exports.EncounterInstanceQuery
 * @summary EncounterInstance Query.
 */
module.exports.EncounterInstanceQuery = {
	description: 'Get information about a single Encounter',
	resolve: encounterInstanceResolver,
	type: EncounterSchema
};
