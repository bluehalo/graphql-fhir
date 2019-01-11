// Schemas
const ExampleScenarioSchema = require('../../schemas/examplescenario.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ExampleScenarioInput = require('../../inputs/examplescenario.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createExampleScenario,
	updateExampleScenario,
	removeExampleScenario,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ExampleScenario',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ExampleScenario record.',
	},
	resource: {
		type: new GraphQLNonNull(ExampleScenarioInput),
		description: 'ExampleScenario Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ExampleScenario record for deletion.',
	},
};

/**
 * @name exports.ExampleScenarioCreateMutation
 * @summary ExampleScenarioCreate mutation.
 */
module.exports.ExampleScenarioCreateMutation = {
	description: 'Create a ExampleScenario record',
	resolve: scopeInvariant(scopeOptions, createExampleScenario),
	type: ExampleScenarioSchema,
	args: WriteArgs,
};

/**
 * @name exports.ExampleScenarioUpdateMutation
 * @summary ExampleScenarioUpdate mutation.
 */
module.exports.ExampleScenarioUpdateMutation = {
	description: 'Update a ExampleScenario record',
	resolve: scopeInvariant(scopeOptions, updateExampleScenario),
	type: ExampleScenarioSchema,
	args: WriteArgs,
};

/**
 * @name exports.ExampleScenarioRemoveMutation
 * @summary ExampleScenarioRemove mutation.
 */
module.exports.ExampleScenarioRemoveMutation = {
	description: 'Remove a ExampleScenario record',
	resolve: scopeInvariant(scopeOptions, removeExampleScenario),
	type: ExampleScenarioSchema,
	args: DeleteArgs,
};
