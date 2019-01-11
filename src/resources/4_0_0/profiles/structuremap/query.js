// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const StructureMapSchema = require('../../schemas/structuremap.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const StructureMapArgs = require('../../parameters/structuremap.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	StructureMapArgs,
);

// Resolvers
const {
	getStructureMap,
	getStructureMapList,
	getStructureMapInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'StructureMap',
	action: 'read',
};

/**
 * @name exports.StructureMapQuery
 * @summary StructureMap query.
 */
module.exports.StructureMapQuery = {
	description: 'Query for a single StructureMap',
	resolve: scopeInvariant(scopeOptions, getStructureMap),
	type: StructureMapSchema,
	args: args,
};

/**
 * @name exports.StructureMapListQuery
 * @summary StructureMap query.
 */
module.exports.StructureMapListQuery = {
	description: 'Query for a more than or just one StructureMap',
	resolve: scopeInvariant(scopeOptions, getStructureMapList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.StructureMapInstanceQuery
 * @summary StructureMap query.
 */
module.exports.StructureMapInstanceQuery = {
	description: 'Access information about a single StructureMap',
	resolve: scopeInvariant(scopeOptions, getStructureMapInstance),
	type: StructureMapSchema,
	args: args,
};
