// Schemas
const HealthcareServiceSchema = require('../../schemas/healthcareservice.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const HealthcareServiceInput = require('../../inputs/healthcareservice.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createHealthcareService,
	updateHealthcareService,
	removeHealthcareService,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'HealthcareService',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a HealthcareService record.',
	},
	resource: {
		type: new GraphQLNonNull(HealthcareServiceInput),
		description: 'HealthcareService Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a HealthcareService record for deletion.',
	},
};

/**
 * @name exports.HealthcareServiceCreateMutation
 * @summary HealthcareServiceCreate mutation.
 */
module.exports.HealthcareServiceCreateMutation = {
	description: 'Create a HealthcareService record',
	resolve: scopeInvariant(scopeOptions, createHealthcareService),
	type: HealthcareServiceSchema,
	args: WriteArgs,
};

/**
 * @name exports.HealthcareServiceUpdateMutation
 * @summary HealthcareServiceUpdate mutation.
 */
module.exports.HealthcareServiceUpdateMutation = {
	description: 'Update a HealthcareService record',
	resolve: scopeInvariant(scopeOptions, updateHealthcareService),
	type: HealthcareServiceSchema,
	args: WriteArgs,
};

/**
 * @name exports.HealthcareServiceRemoveMutation
 * @summary HealthcareServiceRemove mutation.
 */
module.exports.HealthcareServiceRemoveMutation = {
	description: 'Remove a HealthcareService record',
	resolve: scopeInvariant(scopeOptions, removeHealthcareService),
	type: HealthcareServiceSchema,
	args: DeleteArgs,
};
