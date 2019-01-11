// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CommunicationSchema = require('../../schemas/communication.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CommunicationArgs = require('../../parameters/communication.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	CommunicationArgs,
);

// Resolvers
const {
	getCommunication,
	getCommunicationList,
	getCommunicationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Communication',
	action: 'read',
};

/**
 * @name exports.CommunicationQuery
 * @summary Communication query.
 */
module.exports.CommunicationQuery = {
	description: 'Query for a single Communication',
	resolve: scopeInvariant(scopeOptions, getCommunication),
	type: CommunicationSchema,
	args: args,
};

/**
 * @name exports.CommunicationListQuery
 * @summary Communication query.
 */
module.exports.CommunicationListQuery = {
	description: 'Query for a more than or just one Communication',
	resolve: scopeInvariant(scopeOptions, getCommunicationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CommunicationInstanceQuery
 * @summary Communication query.
 */
module.exports.CommunicationInstanceQuery = {
	description: 'Access information about a single Communication',
	resolve: scopeInvariant(scopeOptions, getCommunicationInstance),
	type: CommunicationSchema,
	args: args,
};
