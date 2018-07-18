// Schemas
const EndpointSchema = require('../../schemas/endpoint.schema');

// Arguments
const EndpointArgs = require('../../parameters/endpoint.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	endpointResolver,
	endpointListResolver,
	endpointInstanceResolver
} = require('./resolver');

/**
 * @name exports.EndpointQuery
 * @summary Endpoint Query.
 */
module.exports.EndpointQuery = {
	args: Object.assign({}, CommonArgs, EndpointArgs),
	description: 'Query for a single Endpoint',
	resolve: endpointResolver,
	type: EndpointSchema
};

/**
 * @name exports.EndpointListQuery
 * @summary EndpointList Query.
 */
module.exports.EndpointListQuery = {
	args: Object.assign({}, CommonArgs, EndpointArgs),
	description: 'Query for multiple Endpoints',
	resolve: endpointListResolver,
	type: new GraphQLList(EndpointSchema)
};

/**
 * @name exports.EndpointInstanceQuery
 * @summary EndpointInstance Query.
 */
module.exports.EndpointInstanceQuery = {
	description: 'Get information about a single Endpoint',
	resolve: endpointInstanceResolver,
	type: EndpointSchema
};
