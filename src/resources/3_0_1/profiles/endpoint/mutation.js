// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EndpointSchema = require('../../schemas/endpoint.schema');

// Inputs
const EndpointInput = require('../../inputs/endpoint.input');

// Resolvers
const {
	endpointCreateResolver,
	endpointUpdateResolver,
	endpointDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Endpoint',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Endpoint record.',
	},
	resource: {
		type: new GraphQLNonNull(EndpointInput),
		description: 'Endpoint Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Endpoint record for deletion.',
	},
};

/**
 * @name exports.EndpointCreateMutation
 * @summary EndpointCreate Mutation.
 */
module.exports.EndpointCreateMutation = {
	args: WriteArgs,
	description: 'Create a Endpoint',
	resolve: scopeInvariant(scopeOptions, endpointCreateResolver),
	type: EndpointSchema,
};

/**
 * @name exports.EndpointUpdateMutation
 * @summary EndpointUpdate Mutation.
 */
module.exports.EndpointUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Endpoints',
	resolve: scopeInvariant(scopeOptions, endpointUpdateResolver),
	type: EndpointSchema,
};

/**
 * @name exports.EndpointDeleteMutation
 * @summary EndpointDelete Mutation.
 */
module.exports.EndpointDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Endpoint',
	resolve: scopeInvariant(scopeOptions, endpointDeleteResolver),
	type: EndpointSchema,
};
