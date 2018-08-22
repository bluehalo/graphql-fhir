// Schemas
const MedicationOrderSchema = require('../../schemas/medicationorder.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MedicationOrderArgs = require('../../parameters/medicationorder.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	medicationorderResolver,
	medicationorderListResolver,
	medicationorderInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationOrder',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.MedicationOrderQuery
 * @summary MedicationOrder Query.
 */
module.exports.MedicationOrderQuery = {
	args: Object.assign({}, CommonArgs, MedicationOrderArgs),
	description: 'Query for a single MedicationOrder',
	resolve: scopeInvariant(scopeOptions, medicationorderResolver),
	type: MedicationOrderSchema
};

/**
 * @name exports.MedicationOrderListQuery
 * @summary MedicationOrderList Query.
 */
module.exports.MedicationOrderListQuery = {
	args: Object.assign({}, CommonArgs, MedicationOrderArgs),
	description: 'Query for multiple MedicationOrders',
	resolve: scopeInvariant(scopeOptions, medicationorderListResolver),
	type: BundleSchema
};

/**
 * @name exports.MedicationOrderInstanceQuery
 * @summary MedicationOrderInstance Query.
 */
module.exports.MedicationOrderInstanceQuery = {
	description: 'Get information about a single MedicationOrder',
	resolve: scopeInvariant(scopeOptions, medicationorderInstanceResolver),
	type: MedicationOrderSchema
};
