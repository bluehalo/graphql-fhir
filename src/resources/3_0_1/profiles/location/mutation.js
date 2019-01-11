// Schemas
const LocationSchema = require('../../schemas/location.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const LocationInput = require('../../inputs/location.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createLocation,
	updateLocation,
	removeLocation,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Location',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Location record.',
	},
	resource: {
		type: new GraphQLNonNull(LocationInput),
		description: 'Location Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Location record for deletion.',
	},
};

/**
 * @name exports.LocationCreateMutation
 * @summary LocationCreate mutation.
 */
module.exports.LocationCreateMutation = {
	description: 'Create a Location record',
	resolve: scopeInvariant(scopeOptions, createLocation),
	type: LocationSchema,
	args: WriteArgs,
};

/**
 * @name exports.LocationUpdateMutation
 * @summary LocationUpdate mutation.
 */
module.exports.LocationUpdateMutation = {
	description: 'Update a Location record',
	resolve: scopeInvariant(scopeOptions, updateLocation),
	type: LocationSchema,
	args: WriteArgs,
};

/**
 * @name exports.LocationRemoveMutation
 * @summary LocationRemove mutation.
 */
module.exports.LocationRemoveMutation = {
	description: 'Remove a Location record',
	resolve: scopeInvariant(scopeOptions, removeLocation),
	type: LocationSchema,
	args: DeleteArgs,
};
