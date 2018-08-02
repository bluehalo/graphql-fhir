// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const StructureDefinitionSchema = require('../../schemas/structuredefinition.schema');

// Inputs
const StructureDefinitionInput = require('../../inputs/structuredefinition.input');


const {
	structuredefinitionCreateResolver,
	structuredefinitionUpdateResolver,
	structuredefinitionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a StructureDefinition record.'
	},
	resource: {
		type: StructureDefinitionInput,
		description: 'StructureDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a StructureDefinition record for deletion.'
	}
};

/**
 * @name exports.StructureDefinitionCreateMutation
 * @summary StructureDefinitionCreate Mutation.
 */
module.exports.StructureDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a StructureDefinition',
	resolve: structuredefinitionCreateResolver,
	type: StructureDefinitionSchema
};

/**
 * @name exports.StructureDefinitionUpdateMutation
 * @summary StructureDefinitionUpdate Mutation.
 */
module.exports.StructureDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple StructureDefinitions',
	resolve: structuredefinitionUpdateResolver,
	type: StructureDefinitionSchema
};

/**
 * @name exports.StructureDefinitionDeleteMutation
 * @summary StructureDefinitionDelete Mutation.
 */
module.exports.StructureDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single StructureDefinition',
	resolve: structuredefinitionDeleteResolver,
	type: StructureDefinitionSchema
};
