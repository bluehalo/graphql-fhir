// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductIndicationSchema = require('../../schemas/medicinalproductindication.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductIndicationArgs = require('../../parameters/medicinalproductindication.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductIndicationArgs,
);

// Resolvers
const {
	getMedicinalProductIndication,
	getMedicinalProductIndicationList,
	getMedicinalProductIndicationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductIndication',
	action: 'read',
};

/**
 * @name exports.MedicinalProductIndicationQuery
 * @summary MedicinalProductIndication query.
 */
module.exports.MedicinalProductIndicationQuery = {
	description: 'Query for a single MedicinalProductIndication',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductIndication),
	type: MedicinalProductIndicationSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductIndicationListQuery
 * @summary MedicinalProductIndication query.
 */
module.exports.MedicinalProductIndicationListQuery = {
	description: 'Query for a more than or just one MedicinalProductIndication',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductIndicationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductIndicationInstanceQuery
 * @summary MedicinalProductIndication query.
 */
module.exports.MedicinalProductIndicationInstanceQuery = {
	description: 'Access information about a single MedicinalProductIndication',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductIndicationInstance),
	type: MedicinalProductIndicationSchema,
	args: args,
};
