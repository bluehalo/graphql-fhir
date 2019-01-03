// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CommunicationSchema = require('../../schemas/communication.schema');

// Inputs
const CommunicationInput = require('../../inputs/communication.input');

// Resolvers
const {
	communicationCreateResolver,
	communicationUpdateResolver,
	communicationDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Communication',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Communication record for deletion.',
	},
};

/**
 * @name exports.CommunicationCreateMutation
 * @summary CommunicationCreate Mutation.
 */
module.exports.CommunicationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Communication',
	resolve: scopeInvariant(scopeOptions, communicationCreateResolver),
	type: CommunicationSchema,
};

/**
 * @name exports.CommunicationUpdateMutation
 * @summary CommunicationUpdate Mutation.
 */
module.exports.CommunicationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Communications',
	resolve: scopeInvariant(scopeOptions, communicationUpdateResolver),
	type: CommunicationSchema,
};

/**
 * @name exports.CommunicationDeleteMutation
 * @summary CommunicationDelete Mutation.
 */
module.exports.CommunicationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Communication',
	resolve: scopeInvariant(scopeOptions, communicationDeleteResolver),
	type: CommunicationSchema,
};
