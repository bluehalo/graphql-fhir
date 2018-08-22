// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MessageHeaderSchema = require('../../schemas/messageheader.schema');

// Inputs
const MessageHeaderInput = require('../../inputs/messageheader.input');

// Resolvers
const {
	messageheaderCreateResolver,
	messageheaderUpdateResolver,
	messageheaderDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MessageHeader',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MessageHeader record.'
	},
	resource: {
		type: new GraphQLNonNull(MessageHeaderInput),
		description: 'MessageHeader Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a MessageHeader record for deletion.'
	}
};

/**
 * @name exports.MessageHeaderCreateMutation
 * @summary MessageHeaderCreate Mutation.
 */
module.exports.MessageHeaderCreateMutation = {
	args: WriteArgs,
	description: 'Create a MessageHeader',
	resolve: scopeInvariant(scopeOptions, messageheaderCreateResolver),
	type: MessageHeaderSchema
};

/**
 * @name exports.MessageHeaderUpdateMutation
 * @summary MessageHeaderUpdate Mutation.
 */
module.exports.MessageHeaderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MessageHeaders',
	resolve: scopeInvariant(scopeOptions, messageheaderUpdateResolver),
	type: MessageHeaderSchema
};

/**
 * @name exports.MessageHeaderDeleteMutation
 * @summary MessageHeaderDelete Mutation.
 */
module.exports.MessageHeaderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MessageHeader',
	resolve: scopeInvariant(scopeOptions, messageheaderDeleteResolver),
	type: MessageHeaderSchema
};
