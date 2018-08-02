// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EndpointSchema = require('../../schemas/endpoint.schema');

// Inputs
const EndpointInput = require('../../inputs/endpoint.input');


const {
	endpointCreateResolver,
	endpointUpdateResolver,
	endpointDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Endpoint record.'
	},
	resource: {
		type: EndpointInput,
		description: 'Endpoint Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Endpoint record for deletion.'
	}
};

/**
 * @name exports.EndpointCreateMutation
 * @summary EndpointCreate Mutation.
 */
module.exports.EndpointCreateMutation = {
	args: WriteArgs,
	description: 'Create a Endpoint',
	resolve: endpointCreateResolver,
	type: EndpointSchema
};

/**
 * @name exports.EndpointUpdateMutation
 * @summary EndpointUpdate Mutation.
 */
module.exports.EndpointUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Endpoints',
	resolve: endpointUpdateResolver,
	type: EndpointSchema
};

/**
 * @name exports.EndpointDeleteMutation
 * @summary EndpointDelete Mutation.
 */
module.exports.EndpointDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Endpoint',
	resolve: endpointDeleteResolver,
	type: EndpointSchema
};
