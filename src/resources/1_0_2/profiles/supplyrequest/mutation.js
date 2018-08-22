// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SupplyRequestSchema = require('../../schemas/supplyrequest.schema');

// Inputs
const SupplyRequestInput = require('../../inputs/supplyrequest.input');

// Resolvers
const {
	supplyrequestCreateResolver,
	supplyrequestUpdateResolver,
	supplyrequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'SupplyRequest',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a SupplyRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(SupplyRequestInput),
		description: 'SupplyRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a SupplyRequest record for deletion.'
	}
};

/**
 * @name exports.SupplyRequestCreateMutation
 * @summary SupplyRequestCreate Mutation.
 */
module.exports.SupplyRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a SupplyRequest',
	resolve: scopeInvariant(scopeOptions, supplyrequestCreateResolver),
	type: SupplyRequestSchema
};

/**
 * @name exports.SupplyRequestUpdateMutation
 * @summary SupplyRequestUpdate Mutation.
 */
module.exports.SupplyRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple SupplyRequests',
	resolve: scopeInvariant(scopeOptions, supplyrequestUpdateResolver),
	type: SupplyRequestSchema
};

/**
 * @name exports.SupplyRequestDeleteMutation
 * @summary SupplyRequestDelete Mutation.
 */
module.exports.SupplyRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single SupplyRequest',
	resolve: scopeInvariant(scopeOptions, supplyrequestDeleteResolver),
	type: SupplyRequestSchema
};
