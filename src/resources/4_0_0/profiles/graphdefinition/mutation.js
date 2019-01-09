// Schemas
const GraphDefinitionSchema = require('../../schemas/graphdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const GraphDefinitionInput = require('../../inputs/graphdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createGraphDefinition,
	updateGraphDefinition,
	removeGraphDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'GraphDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a GraphDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(GraphDefinitionInput),
		description: 'GraphDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a GraphDefinition record for deletion.',
	},
};

/**
 * @name exports.GraphDefinitionCreateMutation
 * @summary GraphDefinitionCreate mutation.
 */
module.exports.GraphDefinitionCreateMutation = {
	description: 'Create a GraphDefinition record',
	resolve: scopeInvariant(scopeOptions, createGraphDefinition),
	type: GraphDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.GraphDefinitionUpdateMutation
 * @summary GraphDefinitionUpdate mutation.
 */
module.exports.GraphDefinitionUpdateMutation = {
	description: 'Update a GraphDefinition record',
	resolve: scopeInvariant(scopeOptions, updateGraphDefinition),
	type: GraphDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.GraphDefinitionRemoveMutation
 * @summary GraphDefinitionRemove mutation.
 */
module.exports.GraphDefinitionRemoveMutation = {
	description: 'Remove a GraphDefinition record',
	resolve: scopeInvariant(scopeOptions, removeGraphDefinition),
	type: GraphDefinitionSchema,
	args: DeleteArgs,
};
