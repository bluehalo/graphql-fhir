// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EncounterSchema = require('../../schemas/encounter.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EncounterArgs = require('../../parameters/encounter.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, EncounterArgs);

// Resolvers
const {
	getEncounter,
	getEncounterList,
	getEncounterInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Encounter',
	action: 'read',
};

/**
 * @name exports.EncounterQuery
 * @summary Encounter query.
 */
module.exports.EncounterQuery = {
	description: 'Query for a single Encounter',
	resolve: scopeInvariant(scopeOptions, getEncounter),
	type: EncounterSchema,
	args: args,
};

/**
 * @name exports.EncounterListQuery
 * @summary Encounter query.
 */
module.exports.EncounterListQuery = {
	description: 'Query for a more than or just one Encounter',
	resolve: scopeInvariant(scopeOptions, getEncounterList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EncounterInstanceQuery
 * @summary Encounter query.
 */
module.exports.EncounterInstanceQuery = {
	description: 'Access information about a single Encounter',
	resolve: scopeInvariant(scopeOptions, getEncounterInstance),
	type: EncounterSchema,
	args: args,
};
