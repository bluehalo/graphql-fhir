// Schemas
const PatientSchema = require('../../schemas/patient.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PatientInput = require('../../inputs/patient.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createPatient, updatePatient, removePatient } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Patient',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Patient record.',
	},
	resource: {
		type: new GraphQLNonNull(PatientInput),
		description: 'Patient Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Patient record for deletion.',
	},
};

/**
 * @name exports.PatientCreateMutation
 * @summary PatientCreate mutation.
 */
module.exports.PatientCreateMutation = {
	description: 'Create a Patient record',
	resolve: scopeInvariant(scopeOptions, createPatient),
	type: PatientSchema,
	args: WriteArgs,
};

/**
 * @name exports.PatientUpdateMutation
 * @summary PatientUpdate mutation.
 */
module.exports.PatientUpdateMutation = {
	description: 'Update a Patient record',
	resolve: scopeInvariant(scopeOptions, updatePatient),
	type: PatientSchema,
	args: WriteArgs,
};

/**
 * @name exports.PatientRemoveMutation
 * @summary PatientRemove mutation.
 */
module.exports.PatientRemoveMutation = {
	description: 'Remove a Patient record',
	resolve: scopeInvariant(scopeOptions, removePatient),
	type: PatientSchema,
	args: DeleteArgs,
};
