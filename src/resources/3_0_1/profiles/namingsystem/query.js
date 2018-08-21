// Schemas
const NamingSystemSchema = require('../../schemas/namingsystem.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const NamingSystemArgs = require('../../parameters/namingsystem.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	namingsystemResolver,
	namingsystemListResolver,
	namingsystemInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'NamingSystem',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.NamingSystemQuery
 * @summary NamingSystem Query.
 */
module.exports.NamingSystemQuery = {
	args: Object.assign({}, CommonArgs, NamingSystemArgs),
	description: 'Query for a single NamingSystem',
	resolve: scopeInvariant(scopeOptions, namingsystemResolver),
	type: NamingSystemSchema
};

/**
 * @name exports.NamingSystemListQuery
 * @summary NamingSystemList Query.
 */
module.exports.NamingSystemListQuery = {
	args: Object.assign({}, CommonArgs, NamingSystemArgs),
	description: 'Query for multiple NamingSystems',
	resolve: scopeInvariant(scopeOptions, namingsystemListResolver),
	type: BundleSchema
};

/**
 * @name exports.NamingSystemInstanceQuery
 * @summary NamingSystemInstance Query.
 */
module.exports.NamingSystemInstanceQuery = {
	description: 'Get information about a single NamingSystem',
	resolve: scopeInvariant(scopeOptions, namingsystemInstanceResolver),
	type: NamingSystemSchema
};
