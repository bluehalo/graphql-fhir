// Schemas
const PractitionerRoleSchema = require('../../schemas/practitionerrole.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PractitionerRoleInput = require('../../inputs/practitionerrole.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createPractitionerRole,
	updatePractitionerRole,
	removePractitionerRole,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PractitionerRole',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a PractitionerRole record.',
	},
	resource: {
		type: new GraphQLNonNull(PractitionerRoleInput),
		description: 'PractitionerRole Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a PractitionerRole record for deletion.',
	},
};

/**
 * @name exports.PractitionerRoleCreateMutation
 * @summary PractitionerRoleCreate mutation.
 */
module.exports.PractitionerRoleCreateMutation = {
	description: 'Create a PractitionerRole record',
	resolve: scopeInvariant(scopeOptions, createPractitionerRole),
	type: PractitionerRoleSchema,
	args: WriteArgs,
};

/**
 * @name exports.PractitionerRoleUpdateMutation
 * @summary PractitionerRoleUpdate mutation.
 */
module.exports.PractitionerRoleUpdateMutation = {
	description: 'Update a PractitionerRole record',
	resolve: scopeInvariant(scopeOptions, updatePractitionerRole),
	type: PractitionerRoleSchema,
	args: WriteArgs,
};

/**
 * @name exports.PractitionerRoleRemoveMutation
 * @summary PractitionerRoleRemove mutation.
 */
module.exports.PractitionerRoleRemoveMutation = {
	description: 'Remove a PractitionerRole record',
	resolve: scopeInvariant(scopeOptions, removePractitionerRole),
	type: PractitionerRoleSchema,
	args: DeleteArgs,
};
