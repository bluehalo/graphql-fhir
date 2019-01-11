// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const BodyStructureSchema = require('../../schemas/bodystructure.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const BodyStructureArgs = require('../../parameters/bodystructure.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	BodyStructureArgs,
);

// Resolvers
const {
	getBodyStructure,
	getBodyStructureList,
	getBodyStructureInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'BodyStructure',
	action: 'read',
};

/**
 * @name exports.BodyStructureQuery
 * @summary BodyStructure query.
 */
module.exports.BodyStructureQuery = {
	description: 'Query for a single BodyStructure',
	resolve: scopeInvariant(scopeOptions, getBodyStructure),
	type: BodyStructureSchema,
	args: args,
};

/**
 * @name exports.BodyStructureListQuery
 * @summary BodyStructure query.
 */
module.exports.BodyStructureListQuery = {
	description: 'Query for a more than or just one BodyStructure',
	resolve: scopeInvariant(scopeOptions, getBodyStructureList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.BodyStructureInstanceQuery
 * @summary BodyStructure query.
 */
module.exports.BodyStructureInstanceQuery = {
	description: 'Access information about a single BodyStructure',
	resolve: scopeInvariant(scopeOptions, getBodyStructureInstance),
	type: BodyStructureSchema,
	args: args,
};
