// Schemas
const ServiceRequestSchema = require('../../schemas/servicerequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ServiceRequestInput = require('../../inputs/servicerequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createServiceRequest,
	updateServiceRequest,
	removeServiceRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ServiceRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ServiceRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(ServiceRequestInput),
		description: 'ServiceRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ServiceRequest record for deletion.',
	},
};

/**
 * @name exports.ServiceRequestCreateMutation
 * @summary ServiceRequestCreate mutation.
 */
module.exports.ServiceRequestCreateMutation = {
	description: 'Create a ServiceRequest record',
	resolve: scopeInvariant(scopeOptions, createServiceRequest),
	type: ServiceRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ServiceRequestUpdateMutation
 * @summary ServiceRequestUpdate mutation.
 */
module.exports.ServiceRequestUpdateMutation = {
	description: 'Update a ServiceRequest record',
	resolve: scopeInvariant(scopeOptions, updateServiceRequest),
	type: ServiceRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ServiceRequestRemoveMutation
 * @summary ServiceRequestRemove mutation.
 */
module.exports.ServiceRequestRemoveMutation = {
	description: 'Remove a ServiceRequest record',
	resolve: scopeInvariant(scopeOptions, removeServiceRequest),
	type: ServiceRequestSchema,
	args: DeleteArgs,
};
