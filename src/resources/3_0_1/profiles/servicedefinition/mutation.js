// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ServiceDefinitionSchema = require('../../schemas/servicedefinition.schema');

// Inputs
const ServiceDefinitionInput = require('../../inputs/servicedefinition.input');


const {
	servicedefinitionCreateResolver,
	servicedefinitionUpdateResolver,
	servicedefinitionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ServiceDefinition record.'
	},
	resource: {
		type: ServiceDefinitionInput,
		description: 'ServiceDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ServiceDefinition record for deletion.'
	}
};

/**
 * @name exports.ServiceDefinitionCreateMutation
 * @summary ServiceDefinitionCreate Mutation.
 */
module.exports.ServiceDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a ServiceDefinition',
	resolve: servicedefinitionCreateResolver,
	type: ServiceDefinitionSchema
};

/**
 * @name exports.ServiceDefinitionUpdateMutation
 * @summary ServiceDefinitionUpdate Mutation.
 */
module.exports.ServiceDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ServiceDefinitions',
	resolve: servicedefinitionUpdateResolver,
	type: ServiceDefinitionSchema
};

/**
 * @name exports.ServiceDefinitionDeleteMutation
 * @summary ServiceDefinitionDelete Mutation.
 */
module.exports.ServiceDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ServiceDefinition',
	resolve: servicedefinitionDeleteResolver,
	type: ServiceDefinitionSchema
};
