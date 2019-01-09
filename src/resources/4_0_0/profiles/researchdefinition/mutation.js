// Schemas
const ResearchDefinitionSchema = require('../../schemas/researchdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ResearchDefinitionInput = require('../../inputs/researchdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createResearchDefinition,
	updateResearchDefinition,
	removeResearchDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ResearchDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(ResearchDefinitionInput),
		description: 'ResearchDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ResearchDefinition record for deletion.',
	},
};

/**
 * @name exports.ResearchDefinitionCreateMutation
 * @summary ResearchDefinitionCreate mutation.
 */
module.exports.ResearchDefinitionCreateMutation = {
	description: 'Create a ResearchDefinition record',
	resolve: scopeInvariant(scopeOptions, createResearchDefinition),
	type: ResearchDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchDefinitionUpdateMutation
 * @summary ResearchDefinitionUpdate mutation.
 */
module.exports.ResearchDefinitionUpdateMutation = {
	description: 'Update a ResearchDefinition record',
	resolve: scopeInvariant(scopeOptions, updateResearchDefinition),
	type: ResearchDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchDefinitionRemoveMutation
 * @summary ResearchDefinitionRemove mutation.
 */
module.exports.ResearchDefinitionRemoveMutation = {
	description: 'Remove a ResearchDefinition record',
	resolve: scopeInvariant(scopeOptions, removeResearchDefinition),
	type: ResearchDefinitionSchema,
	args: DeleteArgs,
};
