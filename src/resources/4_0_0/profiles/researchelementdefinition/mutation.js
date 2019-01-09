// Schemas
const ResearchElementDefinitionSchema = require('../../schemas/researchelementdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ResearchElementDefinitionInput = require('../../inputs/researchelementdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createResearchElementDefinition,
	updateResearchElementDefinition,
	removeResearchElementDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchElementDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ResearchElementDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(ResearchElementDefinitionInput),
		description: 'ResearchElementDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ResearchElementDefinition record for deletion.',
	},
};

/**
 * @name exports.ResearchElementDefinitionCreateMutation
 * @summary ResearchElementDefinitionCreate mutation.
 */
module.exports.ResearchElementDefinitionCreateMutation = {
	description: 'Create a ResearchElementDefinition record',
	resolve: scopeInvariant(scopeOptions, createResearchElementDefinition),
	type: ResearchElementDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchElementDefinitionUpdateMutation
 * @summary ResearchElementDefinitionUpdate mutation.
 */
module.exports.ResearchElementDefinitionUpdateMutation = {
	description: 'Update a ResearchElementDefinition record',
	resolve: scopeInvariant(scopeOptions, updateResearchElementDefinition),
	type: ResearchElementDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchElementDefinitionRemoveMutation
 * @summary ResearchElementDefinitionRemove mutation.
 */
module.exports.ResearchElementDefinitionRemoveMutation = {
	description: 'Remove a ResearchElementDefinition record',
	resolve: scopeInvariant(scopeOptions, removeResearchElementDefinition),
	type: ResearchElementDefinitionSchema,
	args: DeleteArgs,
};
