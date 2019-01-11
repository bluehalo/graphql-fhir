// Schemas
const PractitionerSchema = require('../../schemas/practitioner.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PractitionerInput = require('../../inputs/practitioner.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createPractitioner,
	updatePractitioner,
	removePractitioner,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Practitioner',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Practitioner record.',
	},
	resource: {
		type: new GraphQLNonNull(PractitionerInput),
		description: 'Practitioner Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Practitioner record for deletion.',
	},
};

/**
 * @name exports.PractitionerCreateMutation
 * @summary PractitionerCreate mutation.
 */
module.exports.PractitionerCreateMutation = {
	description: 'Create a Practitioner record',
	resolve: scopeInvariant(scopeOptions, createPractitioner),
	type: PractitionerSchema,
	args: WriteArgs,
};

/**
 * @name exports.PractitionerUpdateMutation
 * @summary PractitionerUpdate mutation.
 */
module.exports.PractitionerUpdateMutation = {
	description: 'Update a Practitioner record',
	resolve: scopeInvariant(scopeOptions, updatePractitioner),
	type: PractitionerSchema,
	args: WriteArgs,
};

/**
 * @name exports.PractitionerRemoveMutation
 * @summary PractitionerRemove mutation.
 */
module.exports.PractitionerRemoveMutation = {
	description: 'Remove a Practitioner record',
	resolve: scopeInvariant(scopeOptions, removePractitioner),
	type: PractitionerSchema,
	args: DeleteArgs,
};
