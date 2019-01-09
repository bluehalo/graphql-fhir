// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductSchema = require('../../schemas/medicinalproduct.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductArgs = require('../../parameters/medicinalproduct.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductArgs,
);

// Resolvers
const {
	getMedicinalProduct,
	getMedicinalProductList,
	getMedicinalProductInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProduct',
	action: 'read',
};

/**
 * @name exports.MedicinalProductQuery
 * @summary MedicinalProduct query.
 */
module.exports.MedicinalProductQuery = {
	description: 'Query for a single MedicinalProduct',
	resolve: scopeInvariant(scopeOptions, getMedicinalProduct),
	type: MedicinalProductSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductListQuery
 * @summary MedicinalProduct query.
 */
module.exports.MedicinalProductListQuery = {
	description: 'Query for a more than or just one MedicinalProduct',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductInstanceQuery
 * @summary MedicinalProduct query.
 */
module.exports.MedicinalProductInstanceQuery = {
	description: 'Access information about a single MedicinalProduct',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductInstance),
	type: MedicinalProductSchema,
	args: args,
};
