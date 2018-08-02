// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CompartmentDefinitionSchema = require('../../schemas/compartmentdefinition.schema');

// Inputs
const CompartmentDefinitionInput = require('../../inputs/compartmentdefinition.input');


const {
	compartmentdefinitionCreateResolver,
	compartmentdefinitionUpdateResolver,
	compartmentdefinitionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CompartmentDefinition record.'
	},
	resource: {
		type: CompartmentDefinitionInput,
		description: 'CompartmentDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a CompartmentDefinition record for deletion.'
	}
};

/**
 * @name exports.CompartmentDefinitionCreateMutation
 * @summary CompartmentDefinitionCreate Mutation.
 */
module.exports.CompartmentDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a CompartmentDefinition',
	resolve: compartmentdefinitionCreateResolver,
	type: CompartmentDefinitionSchema
};

/**
 * @name exports.CompartmentDefinitionUpdateMutation
 * @summary CompartmentDefinitionUpdate Mutation.
 */
module.exports.CompartmentDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CompartmentDefinitions',
	resolve: compartmentdefinitionUpdateResolver,
	type: CompartmentDefinitionSchema
};

/**
 * @name exports.CompartmentDefinitionDeleteMutation
 * @summary CompartmentDefinitionDelete Mutation.
 */
module.exports.CompartmentDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CompartmentDefinition',
	resolve: compartmentdefinitionDeleteResolver,
	type: CompartmentDefinitionSchema
};
