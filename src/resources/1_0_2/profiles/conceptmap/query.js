// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ConceptMapSchema = require('../../schemas/conceptmap.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ConceptMapArgs = require('../../parameters/conceptmap.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ConceptMapArgs);

// Resolvers
const {
	getConceptMap,
	getConceptMapList,
	getConceptMapInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ConceptMap',
	action: 'read',
};

/**
 * @name exports.ConceptMapQuery
 * @summary ConceptMap query.
 */
module.exports.ConceptMapQuery = {
	description: 'Query for a single ConceptMap',
	resolve: scopeInvariant(scopeOptions, getConceptMap),
	type: ConceptMapSchema,
	args: args,
};

/**
 * @name exports.ConceptMapListQuery
 * @summary ConceptMap query.
 */
module.exports.ConceptMapListQuery = {
	description: 'Query for a more than or just one ConceptMap',
	resolve: scopeInvariant(scopeOptions, getConceptMapList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ConceptMapInstanceQuery
 * @summary ConceptMap query.
 */
module.exports.ConceptMapInstanceQuery = {
	description: 'Access information about a single ConceptMap',
	resolve: scopeInvariant(scopeOptions, getConceptMapInstance),
	type: ConceptMapSchema,
	args: args,
};
