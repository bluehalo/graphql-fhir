// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ChargeItemSchema = require('../../schemas/chargeitem.schema');

// Inputs
const ChargeItemInput = require('../../inputs/chargeitem.input');

// Resolvers
const {
	chargeitemCreateResolver,
	chargeitemUpdateResolver,
	chargeitemDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ChargeItem',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ChargeItem record.',
	},
	resource: {
		type: new GraphQLNonNull(ChargeItemInput),
		description: 'ChargeItem Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a ChargeItem record for deletion.',
	},
};

/**
 * @name exports.ChargeItemCreateMutation
 * @summary ChargeItemCreate Mutation.
 */
module.exports.ChargeItemCreateMutation = {
	args: WriteArgs,
	description: 'Create a ChargeItem',
	resolve: scopeInvariant(scopeOptions, chargeitemCreateResolver),
	type: ChargeItemSchema,
};

/**
 * @name exports.ChargeItemUpdateMutation
 * @summary ChargeItemUpdate Mutation.
 */
module.exports.ChargeItemUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ChargeItems',
	resolve: scopeInvariant(scopeOptions, chargeitemUpdateResolver),
	type: ChargeItemSchema,
};

/**
 * @name exports.ChargeItemDeleteMutation
 * @summary ChargeItemDelete Mutation.
 */
module.exports.ChargeItemDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ChargeItem',
	resolve: scopeInvariant(scopeOptions, chargeitemDeleteResolver),
	type: ChargeItemSchema,
};
