// Schemas
const CarePlanSchema = require('../../schemas/careplan.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CarePlanInput = require('../../inputs/careplan.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCarePlan,
	updateCarePlan,
	removeCarePlan,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CarePlan',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a CarePlan record.',
	},
	resource: {
		type: new GraphQLNonNull(CarePlanInput),
		description: 'CarePlan Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CarePlan record for deletion.',
	},
};

/**
 * @name exports.CarePlanCreateMutation
 * @summary CarePlanCreate mutation.
 */
module.exports.CarePlanCreateMutation = {
	description: 'Create a CarePlan record',
	resolve: scopeInvariant(scopeOptions, createCarePlan),
	type: CarePlanSchema,
	args: WriteArgs,
};

/**
 * @name exports.CarePlanUpdateMutation
 * @summary CarePlanUpdate mutation.
 */
module.exports.CarePlanUpdateMutation = {
	description: 'Update a CarePlan record',
	resolve: scopeInvariant(scopeOptions, updateCarePlan),
	type: CarePlanSchema,
	args: WriteArgs,
};

/**
 * @name exports.CarePlanRemoveMutation
 * @summary CarePlanRemove mutation.
 */
module.exports.CarePlanRemoveMutation = {
	description: 'Remove a CarePlan record',
	resolve: scopeInvariant(scopeOptions, removeCarePlan),
	type: CarePlanSchema,
	args: DeleteArgs,
};
