// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SubstanceSchema = require('../../schemas/substance.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SubstanceArgs = require('../../parameters/substance.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, SubstanceArgs);

// Resolvers
const {
	getSubstance,
	getSubstanceList,
	getSubstanceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Substance',
	action: 'read',
};

/**
 * @name exports.SubstanceQuery
 * @summary Substance query.
 */
module.exports.SubstanceQuery = {
	description: 'Query for a single Substance',
	resolve: scopeInvariant(scopeOptions, getSubstance),
	type: SubstanceSchema,
	args: args,
};

/**
 * @name exports.SubstanceListQuery
 * @summary Substance query.
 */
module.exports.SubstanceListQuery = {
	description: 'Query for a more than or just one Substance',
	resolve: scopeInvariant(scopeOptions, getSubstanceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SubstanceInstanceQuery
 * @summary Substance query.
 */
module.exports.SubstanceInstanceQuery = {
	description: 'Access information about a single Substance',
	resolve: scopeInvariant(scopeOptions, getSubstanceInstance),
	type: SubstanceSchema,
	args: args,
};
