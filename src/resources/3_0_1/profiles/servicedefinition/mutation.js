// Schemas
const ServiceDefinitionSchema = require('../../schemas/servicedefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ServiceDefinitionInput = require('../../inputs/servicedefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createServiceDefinition,
	updateServiceDefinition,
	removeServiceDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ServiceDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ServiceDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(ServiceDefinitionInput),
		description: 'ServiceDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ServiceDefinition record for deletion.',
	},
};

/**
 * @name exports.ServiceDefinitionCreateMutation
 * @summary ServiceDefinitionCreate mutation.
 */
module.exports.ServiceDefinitionCreateMutation = {
	description: 'Create a ServiceDefinition record',
	resolve: scopeInvariant(scopeOptions, createServiceDefinition),
	type: ServiceDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ServiceDefinitionUpdateMutation
 * @summary ServiceDefinitionUpdate mutation.
 */
module.exports.ServiceDefinitionUpdateMutation = {
	description: 'Update a ServiceDefinition record',
	resolve: scopeInvariant(scopeOptions, updateServiceDefinition),
	type: ServiceDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ServiceDefinitionRemoveMutation
 * @summary ServiceDefinitionRemove mutation.
 */
module.exports.ServiceDefinitionRemoveMutation = {
	description: 'Remove a ServiceDefinition record',
	resolve: scopeInvariant(scopeOptions, removeServiceDefinition),
	type: ServiceDefinitionSchema,
	args: DeleteArgs,
};
