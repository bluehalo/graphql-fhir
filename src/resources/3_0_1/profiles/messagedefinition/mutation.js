// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MessageDefinitionSchema = require('../../schemas/messagedefinition.schema');

// Inputs
const MessageDefinitionInput = require('../../inputs/messagedefinition.input');


const {
	messagedefinitionCreateResolver,
	messagedefinitionUpdateResolver,
	messagedefinitionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MessageDefinition record.'
	},
	resource: {
		type: MessageDefinitionInput,
		description: 'MessageDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: messagedefinitionCreateResolver,
	type: MessageDefinitionSchema
};

/**
 * @name exports.MessageDefinitionUpdateMutation
 * @summary MessageDefinitionUpdate Mutation.
 */
module.exports.MessageDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MessageDefinitions',
	resolve: messagedefinitionUpdateResolver,
	type: MessageDefinitionSchema
};

/**
 * @name exports.MessageDefinitionDeleteMutation
 * @summary MessageDefinitionDelete Mutation.
 */
module.exports.MessageDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MessageDefinition',
	resolve: messagedefinitionDeleteResolver,
	type: MessageDefinitionSchema
};
