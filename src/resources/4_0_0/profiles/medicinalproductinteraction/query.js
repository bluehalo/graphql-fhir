// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductInteractionSchema = require('../../schemas/medicinalproductinteraction.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductInteractionArgs = require('../../parameters/medicinalproductinteraction.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductInteractionArgs,
);

// Resolvers
const {
	getMedicinalProductInteraction,
	getMedicinalProductInteractionList,
	getMedicinalProductInteractionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductInteraction',
	action: 'read',
};

/**
 * @name exports.MedicinalProductInteractionQuery
 * @summary MedicinalProductInteraction query.
 */
module.exports.MedicinalProductInteractionQuery = {
	description: 'Query for a single MedicinalProductInteraction',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductInteraction),
	type: MedicinalProductInteractionSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductInteractionListQuery
 * @summary MedicinalProductInteraction query.
 */
module.exports.MedicinalProductInteractionListQuery = {
	description: 'Query for a more than or just one MedicinalProductInteraction',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductInteractionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductInteractionInstanceQuery
 * @summary MedicinalProductInteraction query.
 */
module.exports.MedicinalProductInteractionInstanceQuery = {
	description: 'Access information about a single MedicinalProductInteraction',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductInteractionInstance),
	type: MedicinalProductInteractionSchema,
	args: args,
};
