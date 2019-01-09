// Schemas
const NutritionOrderSchema = require('../../schemas/nutritionorder.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const NutritionOrderInput = require('../../inputs/nutritionorder.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createNutritionOrder,
	updateNutritionOrder,
	removeNutritionOrder,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'NutritionOrder',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a NutritionOrder record.',
	},
	resource: {
		type: new GraphQLNonNull(NutritionOrderInput),
		description: 'NutritionOrder Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a NutritionOrder record for deletion.',
	},
};

/**
 * @name exports.NutritionOrderCreateMutation
 * @summary NutritionOrderCreate mutation.
 */
module.exports.NutritionOrderCreateMutation = {
	description: 'Create a NutritionOrder record',
	resolve: scopeInvariant(scopeOptions, createNutritionOrder),
	type: NutritionOrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.NutritionOrderUpdateMutation
 * @summary NutritionOrderUpdate mutation.
 */
module.exports.NutritionOrderUpdateMutation = {
	description: 'Update a NutritionOrder record',
	resolve: scopeInvariant(scopeOptions, updateNutritionOrder),
	type: NutritionOrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.NutritionOrderRemoveMutation
 * @summary NutritionOrderRemove mutation.
 */
module.exports.NutritionOrderRemoveMutation = {
	description: 'Remove a NutritionOrder record',
	resolve: scopeInvariant(scopeOptions, removeNutritionOrder),
	type: NutritionOrderSchema,
	args: DeleteArgs,
};
