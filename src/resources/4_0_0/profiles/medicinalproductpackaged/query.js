// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductPackagedSchema = require('../../schemas/medicinalproductpackaged.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductPackagedArgs = require('../../parameters/medicinalproductpackaged.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductPackagedArgs,
);

// Resolvers
const {
	getMedicinalProductPackaged,
	getMedicinalProductPackagedList,
	getMedicinalProductPackagedInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductPackaged',
	action: 'read',
};

/**
 * @name exports.MedicinalProductPackagedQuery
 * @summary MedicinalProductPackaged query.
 */
module.exports.MedicinalProductPackagedQuery = {
	description: 'Query for a single MedicinalProductPackaged',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductPackaged),
	type: MedicinalProductPackagedSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductPackagedListQuery
 * @summary MedicinalProductPackaged query.
 */
module.exports.MedicinalProductPackagedListQuery = {
	description: 'Query for a more than or just one MedicinalProductPackaged',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductPackagedList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductPackagedInstanceQuery
 * @summary MedicinalProductPackaged query.
 */
module.exports.MedicinalProductPackagedInstanceQuery = {
	description: 'Access information about a single MedicinalProductPackaged',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductPackagedInstance),
	type: MedicinalProductPackagedSchema,
	args: args,
};
