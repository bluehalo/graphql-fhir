// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ValueSetSchema = require('../../schemas/valueset.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ValueSetArgs = require('../../parameters/valueset.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ValueSetArgs);

// Resolvers
const {
	getValueSet,
	getValueSetList,
	getValueSetInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ValueSet',
	action: 'read',
};

/**
 * @name exports.ValueSetQuery
 * @summary ValueSet query.
 */
module.exports.ValueSetQuery = {
	description: 'Query for a single ValueSet',
	resolve: scopeInvariant(scopeOptions, getValueSet),
	type: ValueSetSchema,
	args: args,
};

/**
 * @name exports.ValueSetListQuery
 * @summary ValueSet query.
 */
module.exports.ValueSetListQuery = {
	description: 'Query for a more than or just one ValueSet',
	resolve: scopeInvariant(scopeOptions, getValueSetList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ValueSetInstanceQuery
 * @summary ValueSet query.
 */
module.exports.ValueSetInstanceQuery = {
	description: 'Access information about a single ValueSet',
	resolve: scopeInvariant(scopeOptions, getValueSetInstance),
	type: ValueSetSchema,
	args: args,
};
