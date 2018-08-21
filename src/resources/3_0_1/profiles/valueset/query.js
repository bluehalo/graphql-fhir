// Schemas
const ValueSetSchema = require('../../schemas/valueset.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ValueSetArgs = require('../../parameters/valueset.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	valuesetResolver,
	valuesetListResolver,
	valuesetInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ValueSet',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ValueSetQuery
 * @summary ValueSet Query.
 */
module.exports.ValueSetQuery = {
	args: Object.assign({}, CommonArgs, ValueSetArgs),
	description: 'Query for a single ValueSet',
	resolve: scopeInvariant(scopeOptions, valuesetResolver),
	type: ValueSetSchema
};

/**
 * @name exports.ValueSetListQuery
 * @summary ValueSetList Query.
 */
module.exports.ValueSetListQuery = {
	args: Object.assign({}, CommonArgs, ValueSetArgs),
	description: 'Query for multiple ValueSets',
	resolve: scopeInvariant(scopeOptions, valuesetListResolver),
	type: BundleSchema
};

/**
 * @name exports.ValueSetInstanceQuery
 * @summary ValueSetInstance Query.
 */
module.exports.ValueSetInstanceQuery = {
	description: 'Get information about a single ValueSet',
	resolve: scopeInvariant(scopeOptions, valuesetInstanceResolver),
	type: ValueSetSchema
};
