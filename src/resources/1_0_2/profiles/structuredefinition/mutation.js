// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const StructureDefinitionSchema = require('../../schemas/structuredefinition.schema');

// Inputs
const StructureDefinitionInput = require('../../inputs/structuredefinition.input');

// Resolvers
const {
	structuredefinitionCreateResolver,
	structuredefinitionUpdateResolver,
	structuredefinitionDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'StructureDefinition',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a StructureDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(StructureDefinitionInput),
		description: 'StructureDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a StructureDefinition record for deletion.',
	},
};

/**
 * @name exports.StructureDefinitionCreateMutation
 * @summary StructureDefinitionCreate Mutation.
 */
module.exports.StructureDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a StructureDefinition',
	resolve: scopeInvariant(scopeOptions, structuredefinitionCreateResolver),
	type: StructureDefinitionSchema,
};

/**
 * @name exports.StructureDefinitionUpdateMutation
 * @summary StructureDefinitionUpdate Mutation.
 */
module.exports.StructureDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple StructureDefinitions',
	resolve: scopeInvariant(scopeOptions, structuredefinitionUpdateResolver),
	type: StructureDefinitionSchema,
};

/**
 * @name exports.StructureDefinitionDeleteMutation
 * @summary StructureDefinitionDelete Mutation.
 */
module.exports.StructureDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single StructureDefinition',
	resolve: scopeInvariant(scopeOptions, structuredefinitionDeleteResolver),
	type: StructureDefinitionSchema,
};
