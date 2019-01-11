// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ServiceRequestSchema = require('../../schemas/servicerequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ServiceRequestArgs = require('../../parameters/servicerequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ServiceRequestArgs,
);

// Resolvers
const {
	getServiceRequest,
	getServiceRequestList,
	getServiceRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ServiceRequest',
	action: 'read',
};

/**
 * @name exports.ServiceRequestQuery
 * @summary ServiceRequest query.
 */
module.exports.ServiceRequestQuery = {
	description: 'Query for a single ServiceRequest',
	resolve: scopeInvariant(scopeOptions, getServiceRequest),
	type: ServiceRequestSchema,
	args: args,
};

/**
 * @name exports.ServiceRequestListQuery
 * @summary ServiceRequest query.
 */
module.exports.ServiceRequestListQuery = {
	description: 'Query for a more than or just one ServiceRequest',
	resolve: scopeInvariant(scopeOptions, getServiceRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ServiceRequestInstanceQuery
 * @summary ServiceRequest query.
 */
module.exports.ServiceRequestInstanceQuery = {
	description: 'Access information about a single ServiceRequest',
	resolve: scopeInvariant(scopeOptions, getServiceRequestInstance),
	type: ServiceRequestSchema,
	args: args,
};
