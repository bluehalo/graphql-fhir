// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const RelatedPersonSchema = require('../../schemas/relatedperson.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const RelatedPersonArgs = require('../../parameters/relatedperson.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	RelatedPersonArgs,
);

// Resolvers
const {
	getRelatedPerson,
	getRelatedPersonList,
	getRelatedPersonInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RelatedPerson',
	action: 'read',
};

/**
 * @name exports.RelatedPersonQuery
 * @summary RelatedPerson query.
 */
module.exports.RelatedPersonQuery = {
	description: 'Query for a single RelatedPerson',
	resolve: scopeInvariant(scopeOptions, getRelatedPerson),
	type: RelatedPersonSchema,
	args: args,
};

/**
 * @name exports.RelatedPersonListQuery
 * @summary RelatedPerson query.
 */
module.exports.RelatedPersonListQuery = {
	description: 'Query for a more than or just one RelatedPerson',
	resolve: scopeInvariant(scopeOptions, getRelatedPersonList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.RelatedPersonInstanceQuery
 * @summary RelatedPerson query.
 */
module.exports.RelatedPersonInstanceQuery = {
	description: 'Access information about a single RelatedPerson',
	resolve: scopeInvariant(scopeOptions, getRelatedPersonInstance),
	type: RelatedPersonSchema,
	args: args,
};
