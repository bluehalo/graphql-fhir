// Schemas
const MessageHeaderSchema = require('../../schemas/messageheader.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MessageHeaderArgs = require('../../parameters/messageheader.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	messageheaderResolver,
	messageheaderListResolver,
	messageheaderInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MessageHeader',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.MessageHeaderQuery
 * @summary MessageHeader Query.
 */
module.exports.MessageHeaderQuery = {
	args: Object.assign({}, CommonArgs, MessageHeaderArgs),
	description: 'Query for a single MessageHeader',
	resolve: scopeInvariant(scopeOptions, messageheaderResolver),
	type: MessageHeaderSchema,
};

/**
 * @name exports.MessageHeaderListQuery
 * @summary MessageHeaderList Query.
 */
module.exports.MessageHeaderListQuery = {
	args: Object.assign({}, CommonArgs, MessageHeaderArgs),
	description: 'Query for multiple MessageHeaders',
	resolve: scopeInvariant(scopeOptions, messageheaderListResolver),
	type: BundleSchema,
};

/**
 * @name exports.MessageHeaderInstanceQuery
 * @summary MessageHeaderInstance Query.
 */
module.exports.MessageHeaderInstanceQuery = {
	description: 'Get information about a single MessageHeader',
	resolve: scopeInvariant(scopeOptions, messageheaderInstanceResolver),
	type: MessageHeaderSchema,
};
