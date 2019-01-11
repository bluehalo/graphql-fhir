// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductContraindicationSchema = require('../../schemas/medicinalproductcontraindication.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductContraindicationArgs = require('../../parameters/medicinalproductcontraindication.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductContraindicationArgs,
);

// Resolvers
const {
	getMedicinalProductContraindication,
	getMedicinalProductContraindicationList,
	getMedicinalProductContraindicationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductContraindication',
	action: 'read',
};

/**
 * @name exports.MedicinalProductContraindicationQuery
 * @summary MedicinalProductContraindication query.
 */
module.exports.MedicinalProductContraindicationQuery = {
	description: 'Query for a single MedicinalProductContraindication',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductContraindication),
	type: MedicinalProductContraindicationSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductContraindicationListQuery
 * @summary MedicinalProductContraindication query.
 */
module.exports.MedicinalProductContraindicationListQuery = {
	description:
		'Query for a more than or just one MedicinalProductContraindication',
	resolve: scopeInvariant(
		scopeOptions,
		getMedicinalProductContraindicationList,
	),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductContraindicationInstanceQuery
 * @summary MedicinalProductContraindication query.
 */
module.exports.MedicinalProductContraindicationInstanceQuery = {
	description:
		'Access information about a single MedicinalProductContraindication',
	resolve: scopeInvariant(
		scopeOptions,
		getMedicinalProductContraindicationInstance,
	),
	type: MedicinalProductContraindicationSchema,
	args: args,
};
