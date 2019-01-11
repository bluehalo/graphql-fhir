// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const AdverseEventSchema = require('../../schemas/adverseevent.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const AdverseEventArgs = require('../../parameters/adverseevent.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	AdverseEventArgs,
);

// Resolvers
const {
	getAdverseEvent,
	getAdverseEventList,
	getAdverseEventInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AdverseEvent',
	action: 'read',
};

/**
 * @name exports.AdverseEventQuery
 * @summary AdverseEvent query.
 */
module.exports.AdverseEventQuery = {
	description: 'Query for a single AdverseEvent',
	resolve: scopeInvariant(scopeOptions, getAdverseEvent),
	type: AdverseEventSchema,
	args: args,
};

/**
 * @name exports.AdverseEventListQuery
 * @summary AdverseEvent query.
 */
module.exports.AdverseEventListQuery = {
	description: 'Query for a more than or just one AdverseEvent',
	resolve: scopeInvariant(scopeOptions, getAdverseEventList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.AdverseEventInstanceQuery
 * @summary AdverseEvent query.
 */
module.exports.AdverseEventInstanceQuery = {
	description: 'Access information about a single AdverseEvent',
	resolve: scopeInvariant(scopeOptions, getAdverseEventInstance),
	type: AdverseEventSchema,
	args: args,
};
