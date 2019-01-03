// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PatientSchema = require('../../schemas/patient.schema');

// Inputs
const PatientInput = require('../../inputs/patient.input');

// Resolvers
const {
	patientCreateResolver,
	patientUpdateResolver,
	patientDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Patient',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Patient record.',
	},
	resource: {
		type: new GraphQLNonNull(PatientInput),
		description: 'Patient Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Patient record for deletion.',
	},
};

/**
 * @name exports.PatientCreateMutation
 * @summary PatientCreate Mutation.
 */
module.exports.PatientCreateMutation = {
	args: WriteArgs,
	description: 'Create a Patient',
	resolve: scopeInvariant(scopeOptions, patientCreateResolver),
	type: PatientSchema,
};

/**
 * @name exports.PatientUpdateMutation
 * @summary PatientUpdate Mutation.
 */
module.exports.PatientUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Patients',
	resolve: scopeInvariant(scopeOptions, patientUpdateResolver),
	type: PatientSchema,
};

/**
 * @name exports.PatientDeleteMutation
 * @summary PatientDelete Mutation.
 */
module.exports.PatientDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Patient',
	resolve: scopeInvariant(scopeOptions, patientDeleteResolver),
	type: PatientSchema,
};
