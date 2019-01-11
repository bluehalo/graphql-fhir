// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ChargeItemDefinitionSchema = require('../../schemas/chargeitemdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ChargeItemDefinitionArgs = require('../../parameters/chargeitemdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ChargeItemDefinitionArgs,
);

// Resolvers
const {
	getChargeItemDefinition,
	getChargeItemDefinitionList,
	getChargeItemDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ChargeItemDefinition',
	action: 'read',
};

/**
 * @name exports.ChargeItemDefinitionQuery
 * @summary ChargeItemDefinition query.
 */
module.exports.ChargeItemDefinitionQuery = {
	description: 'Query for a single ChargeItemDefinition',
	resolve: scopeInvariant(scopeOptions, getChargeItemDefinition),
	type: ChargeItemDefinitionSchema,
	args: args,
};

/**
 * @name exports.ChargeItemDefinitionListQuery
 * @summary ChargeItemDefinition query.
 */
module.exports.ChargeItemDefinitionListQuery = {
	description: 'Query for a more than or just one ChargeItemDefinition',
	resolve: scopeInvariant(scopeOptions, getChargeItemDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ChargeItemDefinitionInstanceQuery
 * @summary ChargeItemDefinition query.
 */
module.exports.ChargeItemDefinitionInstanceQuery = {
	description: 'Access information about a single ChargeItemDefinition',
	resolve: scopeInvariant(scopeOptions, getChargeItemDefinitionInstance),
	type: ChargeItemDefinitionSchema,
	args: args,
};
