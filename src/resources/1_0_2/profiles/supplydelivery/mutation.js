// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SupplyDeliverySchema = require('../../schemas/supplydelivery.schema');

// Inputs
const SupplyDeliveryInput = require('../../inputs/supplydelivery.input');

// Resolvers
const {
	supplydeliveryCreateResolver,
	supplydeliveryUpdateResolver,
	supplydeliveryDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'SupplyDelivery',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a SupplyDelivery record.'
	},
	resource: {
		type: new GraphQLNonNull(SupplyDeliveryInput),
		description: 'SupplyDelivery Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a SupplyDelivery record for deletion.'
	}
};

/**
 * @name exports.SupplyDeliveryCreateMutation
 * @summary SupplyDeliveryCreate Mutation.
 */
module.exports.SupplyDeliveryCreateMutation = {
	args: WriteArgs,
	description: 'Create a SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, supplydeliveryCreateResolver),
	type: SupplyDeliverySchema
};

/**
 * @name exports.SupplyDeliveryUpdateMutation
 * @summary SupplyDeliveryUpdate Mutation.
 */
module.exports.SupplyDeliveryUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple SupplyDeliverys',
	resolve: scopeInvariant(scopeOptions, supplydeliveryUpdateResolver),
	type: SupplyDeliverySchema
};

/**
 * @name exports.SupplyDeliveryDeleteMutation
 * @summary SupplyDeliveryDelete Mutation.
 */
module.exports.SupplyDeliveryDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, supplydeliveryDeleteResolver),
	type: SupplyDeliverySchema
};
