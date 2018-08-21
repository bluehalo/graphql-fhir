// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceRequestSchema = require('../../schemas/devicerequest.schema');

// Inputs
const DeviceRequestInput = require('../../inputs/devicerequest.input');

// Resolvers
const {
	devicerequestCreateResolver,
	devicerequestUpdateResolver,
	devicerequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceRequest',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(DeviceRequestInput),
		description: 'DeviceRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a DeviceRequest record for deletion.'
	}
};

/**
 * @name exports.DeviceRequestCreateMutation
 * @summary DeviceRequestCreate Mutation.
 */
module.exports.DeviceRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceRequest',
	resolve: scopeInvariant(scopeOptions, devicerequestCreateResolver),
	type: DeviceRequestSchema
};

/**
 * @name exports.DeviceRequestUpdateMutation
 * @summary DeviceRequestUpdate Mutation.
 */
module.exports.DeviceRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceRequests',
	resolve: scopeInvariant(scopeOptions, devicerequestUpdateResolver),
	type: DeviceRequestSchema
};

/**
 * @name exports.DeviceRequestDeleteMutation
 * @summary DeviceRequestDelete Mutation.
 */
module.exports.DeviceRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceRequest',
	resolve: scopeInvariant(scopeOptions, devicerequestDeleteResolver),
	type: DeviceRequestSchema
};
