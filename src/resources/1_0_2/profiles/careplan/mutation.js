// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CarePlanSchema = require('../../schemas/careplan.schema');

// Inputs
const CarePlanInput = require('../../inputs/careplan.input');


const {
	careplanCreateResolver,
	careplanUpdateResolver,
	careplanDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CarePlan record.'
	},
	resource: {
		type: CarePlanInput,
		description: 'CarePlan Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a CarePlan record for deletion.'
	}
};

/**
 * @name exports.CarePlanCreateMutation
 * @summary CarePlanCreate Mutation.
 */
module.exports.CarePlanCreateMutation = {
	args: WriteArgs,
	description: 'Create a CarePlan',
	resolve: careplanCreateResolver,
	type: CarePlanSchema
};

/**
 * @name exports.CarePlanUpdateMutation
 * @summary CarePlanUpdate Mutation.
 */
module.exports.CarePlanUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CarePlans',
	resolve: careplanUpdateResolver,
	type: CarePlanSchema
};

/**
 * @name exports.CarePlanDeleteMutation
 * @summary CarePlanDelete Mutation.
 */
module.exports.CarePlanDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CarePlan',
	resolve: careplanDeleteResolver,
	type: CarePlanSchema
};
