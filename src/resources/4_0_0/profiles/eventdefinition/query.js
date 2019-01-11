// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EventDefinitionSchema = require('../../schemas/eventdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EventDefinitionArgs = require('../../parameters/eventdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	EventDefinitionArgs,
);

// Resolvers
const {
	getEventDefinition,
	getEventDefinitionList,
	getEventDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EventDefinition',
	action: 'read',
};

/**
 * @name exports.EventDefinitionQuery
 * @summary EventDefinition query.
 */
module.exports.EventDefinitionQuery = {
	description: 'Query for a single EventDefinition',
	resolve: scopeInvariant(scopeOptions, getEventDefinition),
	type: EventDefinitionSchema,
	args: args,
};

/**
 * @name exports.EventDefinitionListQuery
 * @summary EventDefinition query.
 */
module.exports.EventDefinitionListQuery = {
	description: 'Query for a more than or just one EventDefinition',
	resolve: scopeInvariant(scopeOptions, getEventDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EventDefinitionInstanceQuery
 * @summary EventDefinition query.
 */
module.exports.EventDefinitionInstanceQuery = {
	description: 'Access information about a single EventDefinition',
	resolve: scopeInvariant(scopeOptions, getEventDefinitionInstance),
	type: EventDefinitionSchema,
	args: args,
};
