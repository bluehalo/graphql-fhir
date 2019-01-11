// Schemas
const CommunicationSchema = require('../../schemas/communication.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CommunicationInput = require('../../inputs/communication.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCommunication,
	updateCommunication,
	removeCommunication,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Communication',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Communication record.',
	},
	resource: {
		type: new GraphQLNonNull(CommunicationInput),
		description: 'Communication Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Communication record for deletion.',
	},
};

/**
 * @name exports.CommunicationCreateMutation
 * @summary CommunicationCreate mutation.
 */
module.exports.CommunicationCreateMutation = {
	description: 'Create a Communication record',
	resolve: scopeInvariant(scopeOptions, createCommunication),
	type: CommunicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.CommunicationUpdateMutation
 * @summary CommunicationUpdate mutation.
 */
module.exports.CommunicationUpdateMutation = {
	description: 'Update a Communication record',
	resolve: scopeInvariant(scopeOptions, updateCommunication),
	type: CommunicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.CommunicationRemoveMutation
 * @summary CommunicationRemove mutation.
 */
module.exports.CommunicationRemoveMutation = {
	description: 'Remove a Communication record',
	resolve: scopeInvariant(scopeOptions, removeCommunication),
	type: CommunicationSchema,
	args: DeleteArgs,
};
