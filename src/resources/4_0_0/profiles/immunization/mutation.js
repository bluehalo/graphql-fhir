// Schemas
const ImmunizationSchema = require('../../schemas/immunization.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImmunizationInput = require('../../inputs/immunization.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImmunization,
	updateImmunization,
	removeImmunization,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Immunization',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Immunization record.',
	},
	resource: {
		type: new GraphQLNonNull(ImmunizationInput),
		description: 'Immunization Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Immunization record for deletion.',
	},
};

/**
 * @name exports.ImmunizationCreateMutation
 * @summary ImmunizationCreate mutation.
 */
module.exports.ImmunizationCreateMutation = {
	description: 'Create a Immunization record',
	resolve: scopeInvariant(scopeOptions, createImmunization),
	type: ImmunizationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImmunizationUpdateMutation
 * @summary ImmunizationUpdate mutation.
 */
module.exports.ImmunizationUpdateMutation = {
	description: 'Update a Immunization record',
	resolve: scopeInvariant(scopeOptions, updateImmunization),
	type: ImmunizationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImmunizationRemoveMutation
 * @summary ImmunizationRemove mutation.
 */
module.exports.ImmunizationRemoveMutation = {
	description: 'Remove a Immunization record',
	resolve: scopeInvariant(scopeOptions, removeImmunization),
	type: ImmunizationSchema,
	args: DeleteArgs,
};
