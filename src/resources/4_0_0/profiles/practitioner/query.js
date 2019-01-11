// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PractitionerSchema = require('../../schemas/practitioner.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PractitionerArgs = require('../../parameters/practitioner.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	PractitionerArgs,
);

// Resolvers
const {
	getPractitioner,
	getPractitionerList,
	getPractitionerInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Practitioner',
	action: 'read',
};

/**
 * @name exports.PractitionerQuery
 * @summary Practitioner query.
 */
module.exports.PractitionerQuery = {
	description: 'Query for a single Practitioner',
	resolve: scopeInvariant(scopeOptions, getPractitioner),
	type: PractitionerSchema,
	args: args,
};

/**
 * @name exports.PractitionerListQuery
 * @summary Practitioner query.
 */
module.exports.PractitionerListQuery = {
	description: 'Query for a more than or just one Practitioner',
	resolve: scopeInvariant(scopeOptions, getPractitionerList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PractitionerInstanceQuery
 * @summary Practitioner query.
 */
module.exports.PractitionerInstanceQuery = {
	description: 'Access information about a single Practitioner',
	resolve: scopeInvariant(scopeOptions, getPractitionerInstance),
	type: PractitionerSchema,
	args: args,
};
