// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CommunicationRequestSchema = require('../../schemas/communicationrequest.schema');

// Inputs
const CommunicationRequestInput = require('../../inputs/communicationrequest.input');

// Resolvers
const {
	communicationrequestCreateResolver,
	communicationrequestUpdateResolver,
	communicationrequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CommunicationRequest',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CommunicationRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(CommunicationRequestInput),
		description: 'CommunicationRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a CommunicationRequest record for deletion.'
	}
};

/**
 * @name exports.CommunicationRequestCreateMutation
 * @summary CommunicationRequestCreate Mutation.
 */
module.exports.CommunicationRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, communicationrequestCreateResolver),
	type: CommunicationRequestSchema
};

/**
 * @name exports.CommunicationRequestUpdateMutation
 * @summary CommunicationRequestUpdate Mutation.
 */
module.exports.CommunicationRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CommunicationRequests',
	resolve: scopeInvariant(scopeOptions, communicationrequestUpdateResolver),
	type: CommunicationRequestSchema
};

/**
 * @name exports.CommunicationRequestDeleteMutation
 * @summary CommunicationRequestDelete Mutation.
 */
module.exports.CommunicationRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, communicationrequestDeleteResolver),
	type: CommunicationRequestSchema
};
