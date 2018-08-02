// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const NutritionOrderSchema = require('../../schemas/nutritionorder.schema');

// Inputs
const NutritionOrderInput = require('../../inputs/nutritionorder.input');


const {
	nutritionorderCreateResolver,
	nutritionorderUpdateResolver,
	nutritionorderDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a NutritionOrder record.'
	},
	resource: {
		type: NutritionOrderInput,
		description: 'NutritionOrder Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a NutritionOrder record for deletion.'
	}
};

/**
 * @name exports.NutritionOrderCreateMutation
 * @summary NutritionOrderCreate Mutation.
 */
module.exports.NutritionOrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a NutritionOrder',
	resolve: nutritionorderCreateResolver,
	type: NutritionOrderSchema
};

/**
 * @name exports.NutritionOrderUpdateMutation
 * @summary NutritionOrderUpdate Mutation.
 */
module.exports.NutritionOrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple NutritionOrders',
	resolve: nutritionorderUpdateResolver,
	type: NutritionOrderSchema
};

/**
 * @name exports.NutritionOrderDeleteMutation
 * @summary NutritionOrderDelete Mutation.
 */
module.exports.NutritionOrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single NutritionOrder',
	resolve: nutritionorderDeleteResolver,
	type: NutritionOrderSchema
};
