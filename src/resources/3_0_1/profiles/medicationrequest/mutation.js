// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationRequestSchema = require('../../schemas/medicationrequest.schema');

// Inputs
const MedicationRequestInput = require('../../inputs/medicationrequest.input');

// Resolvers
const {
	medicationrequestCreateResolver,
	medicationrequestUpdateResolver,
	medicationrequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationRequest',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(MedicationRequestInput),
		description: 'MedicationRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a MedicationRequest record for deletion.'
	}
};

/**
 * @name exports.MedicationRequestCreateMutation
 * @summary MedicationRequestCreate Mutation.
 */
module.exports.MedicationRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationRequest',
	resolve: scopeInvariant(scopeOptions, medicationrequestCreateResolver),
	type: MedicationRequestSchema
};

/**
 * @name exports.MedicationRequestUpdateMutation
 * @summary MedicationRequestUpdate Mutation.
 */
module.exports.MedicationRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationRequests',
	resolve: scopeInvariant(scopeOptions, medicationrequestUpdateResolver),
	type: MedicationRequestSchema
};

/**
 * @name exports.MedicationRequestDeleteMutation
 * @summary MedicationRequestDelete Mutation.
 */
module.exports.MedicationRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationRequest',
	resolve: scopeInvariant(scopeOptions, medicationrequestDeleteResolver),
	type: MedicationRequestSchema
};
