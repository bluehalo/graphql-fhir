// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const AllergyIntoleranceSchema = require('../../schemas/allergyintolerance.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const AllergyIntoleranceArgs = require('../../parameters/allergyintolerance.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	AllergyIntoleranceArgs,
);

// Resolvers
const {
	getAllergyIntolerance,
	getAllergyIntoleranceList,
	getAllergyIntoleranceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AllergyIntolerance',
	action: 'read',
};

/**
 * @name exports.AllergyIntoleranceQuery
 * @summary AllergyIntolerance query.
 */
module.exports.AllergyIntoleranceQuery = {
	description: 'Query for a single AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, getAllergyIntolerance),
	type: AllergyIntoleranceSchema,
	args: args,
};

/**
 * @name exports.AllergyIntoleranceListQuery
 * @summary AllergyIntolerance query.
 */
module.exports.AllergyIntoleranceListQuery = {
	description: 'Query for a more than or just one AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, getAllergyIntoleranceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.AllergyIntoleranceInstanceQuery
 * @summary AllergyIntolerance query.
 */
module.exports.AllergyIntoleranceInstanceQuery = {
	description: 'Access information about a single AllergyIntolerance',
	resolve: scopeInvariant(scopeOptions, getAllergyIntoleranceInstance),
	type: AllergyIntoleranceSchema,
	args: args,
};
