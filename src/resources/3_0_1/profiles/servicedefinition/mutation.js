// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ServiceDefinitionSchema = require('../../schemas/servicedefinition.schema');

// Inputs
const ServiceDefinitionInput = require('../../inputs/servicedefinition.input');

// Resolvers
const {
	servicedefinitionCreateResolver,
	servicedefinitionUpdateResolver,
	servicedefinitionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ServiceDefinition',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ServiceDefinition record.'
	},
	resource: {
		type: new GraphQLNonNull(ServiceDefinitionInput),
		description: 'ServiceDefinition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, servicedefinitionCreateResolver),
	type: ServiceDefinitionSchema
};

/**
 * @name exports.ServiceDefinitionUpdateMutation
 * @summary ServiceDefinitionUpdate Mutation.
 */
module.exports.ServiceDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ServiceDefinitions',
	resolve: scopeInvariant(scopeOptions, servicedefinitionUpdateResolver),
	type: ServiceDefinitionSchema
};

/**
 * @name exports.ServiceDefinitionDeleteMutation
 * @summary ServiceDefinitionDelete Mutation.
 */
module.exports.ServiceDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ServiceDefinition',
	resolve: scopeInvariant(scopeOptions, servicedefinitionDeleteResolver),
	type: ServiceDefinitionSchema
};
