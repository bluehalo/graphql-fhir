// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ChargeItemSchema = require('../../schemas/chargeitem.schema');

// Inputs
const ChargeItemInput = require('../../inputs/chargeitem.input');


const {
	chargeitemCreateResolver,
	chargeitemUpdateResolver,
	chargeitemDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ChargeItem record.'
	},
	resource: {
		type: ChargeItemInput,
		description: 'ChargeItem Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ChargeItem record for deletion.'
	}
};

/**
 * @name exports.ChargeItemCreateMutation
 * @summary ChargeItemCreate Mutation.
 */
module.exports.ChargeItemCreateMutation = {
	args: WriteArgs,
	description: 'Create a ChargeItem',
	resolve: chargeitemCreateResolver,
	type: ChargeItemSchema
};

/**
 * @name exports.ChargeItemUpdateMutation
 * @summary ChargeItemUpdate Mutation.
 */
module.exports.ChargeItemUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ChargeItems',
	resolve: chargeitemUpdateResolver,
	type: ChargeItemSchema
};

/**
 * @name exports.ChargeItemDeleteMutation
 * @summary ChargeItemDelete Mutation.
 */
module.exports.ChargeItemDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ChargeItem',
	resolve: chargeitemDeleteResolver,
	type: ChargeItemSchema
};
