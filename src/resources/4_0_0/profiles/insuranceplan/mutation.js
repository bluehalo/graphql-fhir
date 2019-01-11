// Schemas
const InsurancePlanSchema = require('../../schemas/insuranceplan.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const InsurancePlanInput = require('../../inputs/insuranceplan.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createInsurancePlan,
	updateInsurancePlan,
	removeInsurancePlan,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'InsurancePlan',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a InsurancePlan record.',
	},
	resource: {
		type: new GraphQLNonNull(InsurancePlanInput),
		description: 'InsurancePlan Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a InsurancePlan record for deletion.',
	},
};

/**
 * @name exports.InsurancePlanCreateMutation
 * @summary InsurancePlanCreate mutation.
 */
module.exports.InsurancePlanCreateMutation = {
	description: 'Create a InsurancePlan record',
	resolve: scopeInvariant(scopeOptions, createInsurancePlan),
	type: InsurancePlanSchema,
	args: WriteArgs,
};

/**
 * @name exports.InsurancePlanUpdateMutation
 * @summary InsurancePlanUpdate mutation.
 */
module.exports.InsurancePlanUpdateMutation = {
	description: 'Update a InsurancePlan record',
	resolve: scopeInvariant(scopeOptions, updateInsurancePlan),
	type: InsurancePlanSchema,
	args: WriteArgs,
};

/**
 * @name exports.InsurancePlanRemoveMutation
 * @summary InsurancePlanRemove mutation.
 */
module.exports.InsurancePlanRemoveMutation = {
	description: 'Remove a InsurancePlan record',
	resolve: scopeInvariant(scopeOptions, removeInsurancePlan),
	type: InsurancePlanSchema,
	args: DeleteArgs,
};
