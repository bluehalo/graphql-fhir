// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ActivityDefinitionSchema = require('../../schemas/activitydefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ActivityDefinitionArgs = require('../../parameters/activitydefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ActivityDefinitionArgs,
);

// Resolvers
const {
	getActivityDefinition,
	getActivityDefinitionList,
	getActivityDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ActivityDefinition',
	action: 'read',
};

/**
 * @name exports.ActivityDefinitionQuery
 * @summary ActivityDefinition query.
 */
module.exports.ActivityDefinitionQuery = {
	description: 'Query for a single ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, getActivityDefinition),
	type: ActivityDefinitionSchema,
	args: args,
};

/**
 * @name exports.ActivityDefinitionListQuery
 * @summary ActivityDefinition query.
 */
module.exports.ActivityDefinitionListQuery = {
	description: 'Query for a more than or just one ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, getActivityDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ActivityDefinitionInstanceQuery
 * @summary ActivityDefinition query.
 */
module.exports.ActivityDefinitionInstanceQuery = {
	description: 'Access information about a single ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, getActivityDefinitionInstance),
	type: ActivityDefinitionSchema,
	args: args,
};
