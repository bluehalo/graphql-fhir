// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationDispenseSchema = require('../../schemas/medicationdispense.schema');

// Inputs
const MedicationDispenseInput = require('../../inputs/medicationdispense.input');

// Resolvers
const {
	medicationdispenseCreateResolver,
	medicationdispenseUpdateResolver,
	medicationdispenseDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationDispense',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a MedicationDispense record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationDispenseInput),
		description: 'MedicationDispense Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a MedicationDispense record for deletion.',
	},
};

/**
 * @name exports.MedicationDispenseCreateMutation
 * @summary MedicationDispenseCreate Mutation.
 */
module.exports.MedicationDispenseCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationDispense',
	resolve: scopeInvariant(scopeOptions, medicationdispenseCreateResolver),
	type: MedicationDispenseSchema,
};

/**
 * @name exports.MedicationDispenseUpdateMutation
 * @summary MedicationDispenseUpdate Mutation.
 */
module.exports.MedicationDispenseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationDispenses',
	resolve: scopeInvariant(scopeOptions, medicationdispenseUpdateResolver),
	type: MedicationDispenseSchema,
};

/**
 * @name exports.MedicationDispenseDeleteMutation
 * @summary MedicationDispenseDelete Mutation.
 */
module.exports.MedicationDispenseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationDispense',
	resolve: scopeInvariant(scopeOptions, medicationdispenseDeleteResolver),
	type: MedicationDispenseSchema,
};
