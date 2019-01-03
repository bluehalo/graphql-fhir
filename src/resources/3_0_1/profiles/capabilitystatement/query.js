// Schemas
const CapabilityStatementSchema = require('../../schemas/capabilitystatement.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CapabilityStatementArgs = require('../../parameters/capabilitystatement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	capabilitystatementResolver,
	capabilitystatementListResolver,
	capabilitystatementInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CapabilityStatement',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.CapabilityStatementQuery
 * @summary CapabilityStatement Query.
 */
module.exports.CapabilityStatementQuery = {
	args: Object.assign({}, CommonArgs, CapabilityStatementArgs),
	description: 'Query for a single CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, capabilitystatementResolver),
	type: CapabilityStatementSchema,
};

/**
 * @name exports.CapabilityStatementListQuery
 * @summary CapabilityStatementList Query.
 */
module.exports.CapabilityStatementListQuery = {
	args: Object.assign({}, CommonArgs, CapabilityStatementArgs),
	description: 'Query for multiple CapabilityStatements',
	resolve: scopeInvariant(scopeOptions, capabilitystatementListResolver),
	type: BundleSchema,
};

/**
 * @name exports.CapabilityStatementInstanceQuery
 * @summary CapabilityStatementInstance Query.
 */
module.exports.CapabilityStatementInstanceQuery = {
	description: 'Get information about a single CapabilityStatement',
	resolve: scopeInvariant(scopeOptions, capabilitystatementInstanceResolver),
	type: CapabilityStatementSchema,
};
