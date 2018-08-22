// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OperationDefinitionSchema = require('../../schemas/operationdefinition.schema');

// Inputs
const OperationDefinitionInput = require('../../inputs/operationdefinition.input');

// Resolvers
const {
	operationdefinitionCreateResolver,
	operationdefinitionUpdateResolver,
	operationdefinitionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'OperationDefinition',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a OperationDefinition record.'
	},
	resource: {
		type: new GraphQLNonNull(OperationDefinitionInput),
		description: 'OperationDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a OperationDefinition record for deletion.'
	}
};

/**
 * @name exports.OperationDefinitionCreateMutation
 * @summary OperationDefinitionCreate Mutation.
 */
module.exports.OperationDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a OperationDefinition',
	resolve: scopeInvariant(scopeOptions, operationdefinitionCreateResolver),
	type: OperationDefinitionSchema
};

/**
 * @name exports.OperationDefinitionUpdateMutation
 * @summary OperationDefinitionUpdate Mutation.
 */
module.exports.OperationDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple OperationDefinitions',
	resolve: scopeInvariant(scopeOptions, operationdefinitionUpdateResolver),
	type: OperationDefinitionSchema
};

/**
 * @name exports.OperationDefinitionDeleteMutation
 * @summary OperationDefinitionDelete Mutation.
 */
module.exports.OperationDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single OperationDefinition',
	resolve: scopeInvariant(scopeOptions, operationdefinitionDeleteResolver),
	type: OperationDefinitionSchema
};
