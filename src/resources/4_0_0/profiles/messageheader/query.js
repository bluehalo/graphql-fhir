// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MessageHeaderSchema = require('../../schemas/messageheader.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MessageHeaderArgs = require('../../parameters/messageheader.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MessageHeaderArgs,
);

// Resolvers
const {
	getMessageHeader,
	getMessageHeaderList,
	getMessageHeaderInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MessageHeader',
	action: 'read',
};

/**
 * @name exports.MessageHeaderQuery
 * @summary MessageHeader query.
 */
module.exports.MessageHeaderQuery = {
	description: 'Query for a single MessageHeader',
	resolve: scopeInvariant(scopeOptions, getMessageHeader),
	type: MessageHeaderSchema,
	args: args,
};

/**
 * @name exports.MessageHeaderListQuery
 * @summary MessageHeader query.
 */
module.exports.MessageHeaderListQuery = {
	description: 'Query for a more than or just one MessageHeader',
	resolve: scopeInvariant(scopeOptions, getMessageHeaderList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MessageHeaderInstanceQuery
 * @summary MessageHeader query.
 */
module.exports.MessageHeaderInstanceQuery = {
	description: 'Access information about a single MessageHeader',
	resolve: scopeInvariant(scopeOptions, getMessageHeaderInstance),
	type: MessageHeaderSchema,
	args: args,
};
