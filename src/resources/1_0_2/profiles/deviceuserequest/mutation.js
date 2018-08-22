// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceUseRequestSchema = require('../../schemas/deviceuserequest.schema');

// Inputs
const DeviceUseRequestInput = require('../../inputs/deviceuserequest.input');

// Resolvers
const {
	deviceuserequestCreateResolver,
	deviceuserequestUpdateResolver,
	deviceuserequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceUseRequest',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceUseRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(DeviceUseRequestInput),
		description: 'DeviceUseRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a DeviceUseRequest record for deletion.'
	}
};

/**
 * @name exports.DeviceUseRequestCreateMutation
 * @summary DeviceUseRequestCreate Mutation.
 */
module.exports.DeviceUseRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, deviceuserequestCreateResolver),
	type: DeviceUseRequestSchema
};

/**
 * @name exports.DeviceUseRequestUpdateMutation
 * @summary DeviceUseRequestUpdate Mutation.
 */
module.exports.DeviceUseRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceUseRequests',
	resolve: scopeInvariant(scopeOptions, deviceuserequestUpdateResolver),
	type: DeviceUseRequestSchema
};

/**
 * @name exports.DeviceUseRequestDeleteMutation
 * @summary DeviceUseRequestDelete Mutation.
 */
module.exports.DeviceUseRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, deviceuserequestDeleteResolver),
	type: DeviceUseRequestSchema
};
