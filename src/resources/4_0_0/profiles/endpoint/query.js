// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EndpointSchema = require('../../schemas/endpoint.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EndpointArgs = require('../../parameters/endpoint.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, EndpointArgs);

// Resolvers
const {
	getEndpoint,
	getEndpointList,
	getEndpointInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Endpoint',
	action: 'read',
};

/**
 * @name exports.EndpointQuery
 * @summary Endpoint query.
 */
module.exports.EndpointQuery = {
	description: 'Query for a single Endpoint',
	resolve: scopeInvariant(scopeOptions, getEndpoint),
	type: EndpointSchema,
	args: args,
};

/**
 * @name exports.EndpointListQuery
 * @summary Endpoint query.
 */
module.exports.EndpointListQuery = {
	description: 'Query for a more than or just one Endpoint',
	resolve: scopeInvariant(scopeOptions, getEndpointList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EndpointInstanceQuery
 * @summary Endpoint query.
 */
module.exports.EndpointInstanceQuery = {
	description: 'Access information about a single Endpoint',
	resolve: scopeInvariant(scopeOptions, getEndpointInstance),
	type: EndpointSchema,
	args: args,
};
