// Schemas
const MedicinalProductAuthorizationSchema = require('../../schemas/medicinalproductauthorization.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductAuthorizationInput = require('../../inputs/medicinalproductauthorization.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductAuthorization,
	updateMedicinalProductAuthorization,
	removeMedicinalProductAuthorization,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductAuthorization',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductAuthorization record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductAuthorizationInput),
		description: 'MedicinalProductAuthorization Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductAuthorization record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductAuthorizationCreateMutation
 * @summary MedicinalProductAuthorizationCreate mutation.
 */
module.exports.MedicinalProductAuthorizationCreateMutation = {
	description: 'Create a MedicinalProductAuthorization record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProductAuthorization),
	type: MedicinalProductAuthorizationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductAuthorizationUpdateMutation
 * @summary MedicinalProductAuthorizationUpdate mutation.
 */
module.exports.MedicinalProductAuthorizationUpdateMutation = {
	description: 'Update a MedicinalProductAuthorization record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProductAuthorization),
	type: MedicinalProductAuthorizationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductAuthorizationRemoveMutation
 * @summary MedicinalProductAuthorizationRemove mutation.
 */
module.exports.MedicinalProductAuthorizationRemoveMutation = {
	description: 'Remove a MedicinalProductAuthorization record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProductAuthorization),
	type: MedicinalProductAuthorizationSchema,
	args: DeleteArgs,
};
