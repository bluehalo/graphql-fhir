// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SlotSchema = require('../../schemas/slot.schema');

// Inputs
const SlotInput = require('../../inputs/slot.input');

// Resolvers
const {
	slotCreateResolver,
	slotUpdateResolver,
	slotDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Slot',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Slot record.',
	},
	resource: {
		type: new GraphQLNonNull(SlotInput),
		description: 'Slot Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Slot record for deletion.',
	},
};

/**
 * @name exports.SlotCreateMutation
 * @summary SlotCreate Mutation.
 */
module.exports.SlotCreateMutation = {
	args: WriteArgs,
	description: 'Create a Slot',
	resolve: scopeInvariant(scopeOptions, slotCreateResolver),
	type: SlotSchema,
};

/**
 * @name exports.SlotUpdateMutation
 * @summary SlotUpdate Mutation.
 */
module.exports.SlotUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Slots',
	resolve: scopeInvariant(scopeOptions, slotUpdateResolver),
	type: SlotSchema,
};

/**
 * @name exports.SlotDeleteMutation
 * @summary SlotDelete Mutation.
 */
module.exports.SlotDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Slot',
	resolve: scopeInvariant(scopeOptions, slotDeleteResolver),
	type: SlotSchema,
};
