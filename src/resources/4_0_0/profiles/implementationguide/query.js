// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImplementationGuideSchema = require('../../schemas/implementationguide.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImplementationGuideArgs = require('../../parameters/implementationguide.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ImplementationGuideArgs,
);

// Resolvers
const {
	getImplementationGuide,
	getImplementationGuideList,
	getImplementationGuideInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImplementationGuide',
	action: 'read',
};

/**
 * @name exports.ImplementationGuideQuery
 * @summary ImplementationGuide query.
 */
module.exports.ImplementationGuideQuery = {
	description: 'Query for a single ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, getImplementationGuide),
	type: ImplementationGuideSchema,
	args: args,
};

/**
 * @name exports.ImplementationGuideListQuery
 * @summary ImplementationGuide query.
 */
module.exports.ImplementationGuideListQuery = {
	description: 'Query for a more than or just one ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, getImplementationGuideList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImplementationGuideInstanceQuery
 * @summary ImplementationGuide query.
 */
module.exports.ImplementationGuideInstanceQuery = {
	description: 'Access information about a single ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, getImplementationGuideInstance),
	type: ImplementationGuideSchema,
	args: args,
};
