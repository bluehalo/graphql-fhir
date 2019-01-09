// Schemas
const MessageHeaderSchema = require('../../schemas/messageheader.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MessageHeaderInput = require('../../inputs/messageheader.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMessageHeader,
	updateMessageHeader,
	removeMessageHeader,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MessageHeader',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MessageHeader record.',
	},
	resource: {
		type: new GraphQLNonNull(MessageHeaderInput),
		description: 'MessageHeader Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MessageHeader record for deletion.',
	},
};

/**
 * @name exports.MessageHeaderCreateMutation
 * @summary MessageHeaderCreate mutation.
 */
module.exports.MessageHeaderCreateMutation = {
	description: 'Create a MessageHeader record',
	resolve: scopeInvariant(scopeOptions, createMessageHeader),
	type: MessageHeaderSchema,
	args: WriteArgs,
};

/**
 * @name exports.MessageHeaderUpdateMutation
 * @summary MessageHeaderUpdate mutation.
 */
module.exports.MessageHeaderUpdateMutation = {
	description: 'Update a MessageHeader record',
	resolve: scopeInvariant(scopeOptions, updateMessageHeader),
	type: MessageHeaderSchema,
	args: WriteArgs,
};

/**
 * @name exports.MessageHeaderRemoveMutation
 * @summary MessageHeaderRemove mutation.
 */
module.exports.MessageHeaderRemoveMutation = {
	description: 'Remove a MessageHeader record',
	resolve: scopeInvariant(scopeOptions, removeMessageHeader),
	type: MessageHeaderSchema,
	args: DeleteArgs,
};
