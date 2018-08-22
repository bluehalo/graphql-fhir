// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MessageDefinitionSchema = require('../../schemas/messagedefinition.schema');

// Inputs
const MessageDefinitionInput = require('../../inputs/messagedefinition.input');

// Resolvers
const {
	messagedefinitionCreateResolver,
	messagedefinitionUpdateResolver,
	messagedefinitionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MessageDefinition',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MessageDefinition record.'
	},
	resource: {
		type: new GraphQLNonNull(MessageDefinitionInput),
		description: 'MessageDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a MessageDefinition record for deletion.'
	}
};

/**
 * @name exports.MessageDefinitionCreateMutation
 * @summary MessageDefinitionCreate Mutation.
 */
module.exports.MessageDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a MessageDefinition',
	resolve: scopeInvariant(scopeOptions, messagedefinitionCreateResolver),
	type: MessageDefinitionSchema
};

/**
 * @name exports.MessageDefinitionUpdateMutation
 * @summary MessageDefinitionUpdate Mutation.
 */
module.exports.MessageDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MessageDefinitions',
	resolve: scopeInvariant(scopeOptions, messagedefinitionUpdateResolver),
	type: MessageDefinitionSchema
};

/**
 * @name exports.MessageDefinitionDeleteMutation
 * @summary MessageDefinitionDelete Mutation.
 */
module.exports.MessageDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MessageDefinition',
	resolve: scopeInvariant(scopeOptions, messagedefinitionDeleteResolver),
	type: MessageDefinitionSchema
};
