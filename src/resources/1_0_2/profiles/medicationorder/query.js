// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationOrderSchema = require('../../schemas/medicationorder.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationOrderArgs = require('../../parameters/medicationorder.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, MedicationOrderArgs);

// Resolvers
const {
	getMedicationOrder,
	getMedicationOrderList,
	getMedicationOrderInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationOrder',
	action: 'read',
};

/**
 * @name exports.MedicationOrderQuery
 * @summary MedicationOrder query.
 */
module.exports.MedicationOrderQuery = {
	description: 'Query for a single MedicationOrder',
	resolve: scopeInvariant(scopeOptions, getMedicationOrder),
	type: MedicationOrderSchema,
	args: args,
};

/**
 * @name exports.MedicationOrderListQuery
 * @summary MedicationOrder query.
 */
module.exports.MedicationOrderListQuery = {
	description: 'Query for a more than or just one MedicationOrder',
	resolve: scopeInvariant(scopeOptions, getMedicationOrderList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationOrderInstanceQuery
 * @summary MedicationOrder query.
 */
module.exports.MedicationOrderInstanceQuery = {
	description: 'Access information about a single MedicationOrder',
	resolve: scopeInvariant(scopeOptions, getMedicationOrderInstance),
	type: MedicationOrderSchema,
	args: args,
};
