// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationOrderSchema = require('../../schemas/medicationorder.schema');

// Inputs
const MedicationOrderInput = require('../../inputs/medicationorder.input');

// Resolvers
const {
	medicationorderCreateResolver,
	medicationorderUpdateResolver,
	medicationorderDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationOrder',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a MedicationOrder record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationOrderInput),
		description: 'MedicationOrder Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a MedicationOrder record for deletion.',
	},
};

/**
 * @name exports.MedicationOrderCreateMutation
 * @summary MedicationOrderCreate Mutation.
 */
module.exports.MedicationOrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationOrder',
	resolve: scopeInvariant(scopeOptions, medicationorderCreateResolver),
	type: MedicationOrderSchema,
};

/**
 * @name exports.MedicationOrderUpdateMutation
 * @summary MedicationOrderUpdate Mutation.
 */
module.exports.MedicationOrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationOrders',
	resolve: scopeInvariant(scopeOptions, medicationorderUpdateResolver),
	type: MedicationOrderSchema,
};

/**
 * @name exports.MedicationOrderDeleteMutation
 * @summary MedicationOrderDelete Mutation.
 */
module.exports.MedicationOrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationOrder',
	resolve: scopeInvariant(scopeOptions, medicationorderDeleteResolver),
	type: MedicationOrderSchema,
};
