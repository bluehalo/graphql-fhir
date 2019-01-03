// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CarePlanSchema = require('../../schemas/careplan.schema');

// Inputs
const CarePlanInput = require('../../inputs/careplan.input');

// Resolvers
const {
	careplanCreateResolver,
	careplanUpdateResolver,
	careplanDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CarePlan',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CarePlan record.',
	},
	resource: {
		type: new GraphQLNonNull(CarePlanInput),
		description: 'CarePlan Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a CarePlan record for deletion.',
	},
};

/**
 * @name exports.CarePlanCreateMutation
 * @summary CarePlanCreate Mutation.
 */
module.exports.CarePlanCreateMutation = {
	args: WriteArgs,
	description: 'Create a CarePlan',
	resolve: scopeInvariant(scopeOptions, careplanCreateResolver),
	type: CarePlanSchema,
};

/**
 * @name exports.CarePlanUpdateMutation
 * @summary CarePlanUpdate Mutation.
 */
module.exports.CarePlanUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CarePlans',
	resolve: scopeInvariant(scopeOptions, careplanUpdateResolver),
	type: CarePlanSchema,
};

/**
 * @name exports.CarePlanDeleteMutation
 * @summary CarePlanDelete Mutation.
 */
module.exports.CarePlanDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CarePlan',
	resolve: scopeInvariant(scopeOptions, careplanDeleteResolver),
	type: CarePlanSchema,
};
