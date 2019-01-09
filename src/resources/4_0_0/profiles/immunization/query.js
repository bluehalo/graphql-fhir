// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImmunizationSchema = require('../../schemas/immunization.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImmunizationArgs = require('../../parameters/immunization.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ImmunizationArgs,
);

// Resolvers
const {
	getImmunization,
	getImmunizationList,
	getImmunizationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Immunization',
	action: 'read',
};

/**
 * @name exports.ImmunizationQuery
 * @summary Immunization query.
 */
module.exports.ImmunizationQuery = {
	description: 'Query for a single Immunization',
	resolve: scopeInvariant(scopeOptions, getImmunization),
	type: ImmunizationSchema,
	args: args,
};

/**
 * @name exports.ImmunizationListQuery
 * @summary Immunization query.
 */
module.exports.ImmunizationListQuery = {
	description: 'Query for a more than or just one Immunization',
	resolve: scopeInvariant(scopeOptions, getImmunizationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImmunizationInstanceQuery
 * @summary Immunization query.
 */
module.exports.ImmunizationInstanceQuery = {
	description: 'Access information about a single Immunization',
	resolve: scopeInvariant(scopeOptions, getImmunizationInstance),
	type: ImmunizationSchema,
	args: args,
};
