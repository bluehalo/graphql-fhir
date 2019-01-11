// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductUndesirableEffectSchema = require('../../schemas/medicinalproductundesirableeffect.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductUndesirableEffectArgs = require('../../parameters/medicinalproductundesirableeffect.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductUndesirableEffectArgs,
);

// Resolvers
const {
	getMedicinalProductUndesirableEffect,
	getMedicinalProductUndesirableEffectList,
	getMedicinalProductUndesirableEffectInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductUndesirableEffect',
	action: 'read',
};

/**
 * @name exports.MedicinalProductUndesirableEffectQuery
 * @summary MedicinalProductUndesirableEffect query.
 */
module.exports.MedicinalProductUndesirableEffectQuery = {
	description: 'Query for a single MedicinalProductUndesirableEffect',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductUndesirableEffect),
	type: MedicinalProductUndesirableEffectSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductUndesirableEffectListQuery
 * @summary MedicinalProductUndesirableEffect query.
 */
module.exports.MedicinalProductUndesirableEffectListQuery = {
	description:
		'Query for a more than or just one MedicinalProductUndesirableEffect',
	resolve: scopeInvariant(
		scopeOptions,
		getMedicinalProductUndesirableEffectList,
	),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductUndesirableEffectInstanceQuery
 * @summary MedicinalProductUndesirableEffect query.
 */
module.exports.MedicinalProductUndesirableEffectInstanceQuery = {
	description:
		'Access information about a single MedicinalProductUndesirableEffect',
	resolve: scopeInvariant(
		scopeOptions,
		getMedicinalProductUndesirableEffectInstance,
	),
	type: MedicinalProductUndesirableEffectSchema,
	args: args,
};
