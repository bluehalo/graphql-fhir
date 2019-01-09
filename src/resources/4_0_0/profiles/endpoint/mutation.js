// Schemas
const EndpointSchema = require('../../schemas/endpoint.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EndpointInput = require('../../inputs/endpoint.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEndpoint,
	updateEndpoint,
	removeEndpoint,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Endpoint',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Endpoint record.',
	},
	resource: {
		type: new GraphQLNonNull(EndpointInput),
		description: 'Endpoint Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Endpoint record for deletion.',
	},
};

/**
 * @name exports.EndpointCreateMutation
 * @summary EndpointCreate mutation.
 */
module.exports.EndpointCreateMutation = {
	description: 'Create a Endpoint record',
	resolve: scopeInvariant(scopeOptions, createEndpoint),
	type: EndpointSchema,
	args: WriteArgs,
};

/**
 * @name exports.EndpointUpdateMutation
 * @summary EndpointUpdate mutation.
 */
module.exports.EndpointUpdateMutation = {
	description: 'Update a Endpoint record',
	resolve: scopeInvariant(scopeOptions, updateEndpoint),
	type: EndpointSchema,
	args: WriteArgs,
};

/**
 * @name exports.EndpointRemoveMutation
 * @summary EndpointRemove mutation.
 */
module.exports.EndpointRemoveMutation = {
	description: 'Remove a Endpoint record',
	resolve: scopeInvariant(scopeOptions, removeEndpoint),
	type: EndpointSchema,
	args: DeleteArgs,
};
