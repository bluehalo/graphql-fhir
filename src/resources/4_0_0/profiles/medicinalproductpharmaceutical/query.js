// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductPharmaceuticalSchema = require('../../schemas/medicinalproductpharmaceutical.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductPharmaceuticalArgs = require('../../parameters/medicinalproductpharmaceutical.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductPharmaceuticalArgs,
);

// Resolvers
const {
	getMedicinalProductPharmaceutical,
	getMedicinalProductPharmaceuticalList,
	getMedicinalProductPharmaceuticalInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductPharmaceutical',
	action: 'read',
};

/**
 * @name exports.MedicinalProductPharmaceuticalQuery
 * @summary MedicinalProductPharmaceutical query.
 */
module.exports.MedicinalProductPharmaceuticalQuery = {
	description: 'Query for a single MedicinalProductPharmaceutical',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductPharmaceutical),
	type: MedicinalProductPharmaceuticalSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductPharmaceuticalListQuery
 * @summary MedicinalProductPharmaceutical query.
 */
module.exports.MedicinalProductPharmaceuticalListQuery = {
	description:
		'Query for a more than or just one MedicinalProductPharmaceutical',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductPharmaceuticalList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductPharmaceuticalInstanceQuery
 * @summary MedicinalProductPharmaceutical query.
 */
module.exports.MedicinalProductPharmaceuticalInstanceQuery = {
	description:
		'Access information about a single MedicinalProductPharmaceutical',
	resolve: scopeInvariant(
		scopeOptions,
		getMedicinalProductPharmaceuticalInstance,
	),
	type: MedicinalProductPharmaceuticalSchema,
	args: args,
};
