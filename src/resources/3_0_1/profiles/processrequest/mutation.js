// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcessRequestSchema = require('../../schemas/processrequest.schema');

// Inputs
const ProcessRequestInput = require('../../inputs/processrequest.input');

// Resolvers
const {
	processrequestCreateResolver,
	processrequestUpdateResolver,
	processrequestDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ProcessRequest',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a ProcessRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(ProcessRequestInput),
		description: 'ProcessRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a ProcessRequest record for deletion.',
	},
};

/**
 * @name exports.ProcessRequestCreateMutation
 * @summary ProcessRequestCreate Mutation.
 */
module.exports.ProcessRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ProcessRequest',
	resolve: scopeInvariant(scopeOptions, processrequestCreateResolver),
	type: ProcessRequestSchema,
};

/**
 * @name exports.ProcessRequestUpdateMutation
 * @summary ProcessRequestUpdate Mutation.
 */
module.exports.ProcessRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ProcessRequests',
	resolve: scopeInvariant(scopeOptions, processrequestUpdateResolver),
	type: ProcessRequestSchema,
};

/**
 * @name exports.ProcessRequestDeleteMutation
 * @summary ProcessRequestDelete Mutation.
 */
module.exports.ProcessRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ProcessRequest',
	resolve: scopeInvariant(scopeOptions, processrequestDeleteResolver),
	type: ProcessRequestSchema,
};
