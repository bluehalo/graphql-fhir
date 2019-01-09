// Schemas
const CommunicationRequestSchema = require('../../schemas/communicationrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CommunicationRequestInput = require('../../inputs/communicationrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCommunicationRequest,
	updateCommunicationRequest,
	removeCommunicationRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CommunicationRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a CommunicationRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(CommunicationRequestInput),
		description: 'CommunicationRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CommunicationRequest record for deletion.',
	},
};

/**
 * @name exports.CommunicationRequestCreateMutation
 * @summary CommunicationRequestCreate mutation.
 */
module.exports.CommunicationRequestCreateMutation = {
	description: 'Create a CommunicationRequest record',
	resolve: scopeInvariant(scopeOptions, createCommunicationRequest),
	type: CommunicationRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.CommunicationRequestUpdateMutation
 * @summary CommunicationRequestUpdate mutation.
 */
module.exports.CommunicationRequestUpdateMutation = {
	description: 'Update a CommunicationRequest record',
	resolve: scopeInvariant(scopeOptions, updateCommunicationRequest),
	type: CommunicationRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.CommunicationRequestRemoveMutation
 * @summary CommunicationRequestRemove mutation.
 */
module.exports.CommunicationRequestRemoveMutation = {
	description: 'Remove a CommunicationRequest record',
	resolve: scopeInvariant(scopeOptions, removeCommunicationRequest),
	type: CommunicationRequestSchema,
	args: DeleteArgs,
};
