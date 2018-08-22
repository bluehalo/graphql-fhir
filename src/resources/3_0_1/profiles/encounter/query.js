// Schemas
const EncounterSchema = require('../../schemas/encounter.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EncounterArgs = require('../../parameters/encounter.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	encounterResolver,
	encounterListResolver,
	encounterInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Encounter',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.EncounterQuery
 * @summary Encounter Query.
 */
module.exports.EncounterQuery = {
	args: Object.assign({}, CommonArgs, EncounterArgs),
	description: 'Query for a single Encounter',
	resolve: scopeInvariant(scopeOptions, encounterResolver),
	type: EncounterSchema
};

/**
 * @name exports.EncounterListQuery
 * @summary EncounterList Query.
 */
module.exports.EncounterListQuery = {
	args: Object.assign({}, CommonArgs, EncounterArgs),
	description: 'Query for multiple Encounters',
	resolve: scopeInvariant(scopeOptions, encounterListResolver),
	type: BundleSchema
};

/**
 * @name exports.EncounterInstanceQuery
 * @summary EncounterInstance Query.
 */
module.exports.EncounterInstanceQuery = {
	description: 'Get information about a single Encounter',
	resolve: scopeInvariant(scopeOptions, encounterInstanceResolver),
	type: EncounterSchema
};
