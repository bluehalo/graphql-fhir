// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CompositionSchema = require('../../schemas/composition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CompositionArgs = require('../../parameters/composition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, CompositionArgs);

// Resolvers
const {
	getComposition,
	getCompositionList,
	getCompositionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Composition',
	action: 'read',
};

/**
 * @name exports.CompositionQuery
 * @summary Composition query.
 */
module.exports.CompositionQuery = {
	description: 'Query for a single Composition',
	resolve: scopeInvariant(scopeOptions, getComposition),
	type: CompositionSchema,
	args: args,
};

/**
 * @name exports.CompositionListQuery
 * @summary Composition query.
 */
module.exports.CompositionListQuery = {
	description: 'Query for a more than or just one Composition',
	resolve: scopeInvariant(scopeOptions, getCompositionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CompositionInstanceQuery
 * @summary Composition query.
 */
module.exports.CompositionInstanceQuery = {
	description: 'Access information about a single Composition',
	resolve: scopeInvariant(scopeOptions, getCompositionInstance),
	type: CompositionSchema,
	args: args,
};
