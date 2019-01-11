// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ExampleScenarioSchema = require('../../schemas/examplescenario.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ExampleScenarioArgs = require('../../parameters/examplescenario.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ExampleScenarioArgs,
);

// Resolvers
const {
	getExampleScenario,
	getExampleScenarioList,
	getExampleScenarioInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ExampleScenario',
	action: 'read',
};

/**
 * @name exports.ExampleScenarioQuery
 * @summary ExampleScenario query.
 */
module.exports.ExampleScenarioQuery = {
	description: 'Query for a single ExampleScenario',
	resolve: scopeInvariant(scopeOptions, getExampleScenario),
	type: ExampleScenarioSchema,
	args: args,
};

/**
 * @name exports.ExampleScenarioListQuery
 * @summary ExampleScenario query.
 */
module.exports.ExampleScenarioListQuery = {
	description: 'Query for a more than or just one ExampleScenario',
	resolve: scopeInvariant(scopeOptions, getExampleScenarioList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ExampleScenarioInstanceQuery
 * @summary ExampleScenario query.
 */
module.exports.ExampleScenarioInstanceQuery = {
	description: 'Access information about a single ExampleScenario',
	resolve: scopeInvariant(scopeOptions, getExampleScenarioInstance),
	type: ExampleScenarioSchema,
	args: args,
};
