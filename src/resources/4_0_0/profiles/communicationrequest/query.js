// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CommunicationRequestSchema = require('../../schemas/communicationrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CommunicationRequestArgs = require('../../parameters/communicationrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	CommunicationRequestArgs,
);

// Resolvers
const {
	getCommunicationRequest,
	getCommunicationRequestList,
	getCommunicationRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CommunicationRequest',
	action: 'read',
};

/**
 * @name exports.CommunicationRequestQuery
 * @summary CommunicationRequest query.
 */
module.exports.CommunicationRequestQuery = {
	description: 'Query for a single CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, getCommunicationRequest),
	type: CommunicationRequestSchema,
	args: args,
};

/**
 * @name exports.CommunicationRequestListQuery
 * @summary CommunicationRequest query.
 */
module.exports.CommunicationRequestListQuery = {
	description: 'Query for a more than or just one CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, getCommunicationRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CommunicationRequestInstanceQuery
 * @summary CommunicationRequest query.
 */
module.exports.CommunicationRequestInstanceQuery = {
	description: 'Access information about a single CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, getCommunicationRequestInstance),
	type: CommunicationRequestSchema,
	args: args,
};
