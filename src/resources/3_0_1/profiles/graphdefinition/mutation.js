// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const GraphDefinitionSchema = require('../../schemas/graphdefinition.schema');

// Inputs
const GraphDefinitionInput = require('../../inputs/graphdefinition.input');


const {
	graphdefinitionCreateResolver,
	graphdefinitionUpdateResolver,
	graphdefinitionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a GraphDefinition record.'
	},
	resource: {
		type: GraphDefinitionInput,
		description: 'GraphDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a GraphDefinition record for deletion.'
	}
};

/**
 * @name exports.GraphDefinitionCreateMutation
 * @summary GraphDefinitionCreate Mutation.
 */
module.exports.GraphDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a GraphDefinition',
	resolve: graphdefinitionCreateResolver,
	type: GraphDefinitionSchema
};

/**
 * @name exports.GraphDefinitionUpdateMutation
 * @summary GraphDefinitionUpdate Mutation.
 */
module.exports.GraphDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple GraphDefinitions',
	resolve: graphdefinitionUpdateResolver,
	type: GraphDefinitionSchema
};

/**
 * @name exports.GraphDefinitionDeleteMutation
 * @summary GraphDefinitionDelete Mutation.
 */
module.exports.GraphDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single GraphDefinition',
	resolve: graphdefinitionDeleteResolver,
	type: GraphDefinitionSchema
};
