// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OperationDefinitionSchema = require('../../schemas/operationdefinition.schema');

// Inputs
const OperationDefinitionInput = require('../../inputs/operationdefinition.input');


const {
	operationdefinitionCreateResolver,
	operationdefinitionUpdateResolver,
	operationdefinitionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a OperationDefinition record.'
	},
	resource: {
		type: OperationDefinitionInput,
		description: 'OperationDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: operationdefinitionCreateResolver,
	type: OperationDefinitionSchema
};

/**
 * @name exports.OperationDefinitionUpdateMutation
 * @summary OperationDefinitionUpdate Mutation.
 */
module.exports.OperationDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple OperationDefinitions',
	resolve: operationdefinitionUpdateResolver,
	type: OperationDefinitionSchema
};

/**
 * @name exports.OperationDefinitionDeleteMutation
 * @summary OperationDefinitionDelete Mutation.
 */
module.exports.OperationDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single OperationDefinition',
	resolve: operationdefinitionDeleteResolver,
	type: OperationDefinitionSchema
};
