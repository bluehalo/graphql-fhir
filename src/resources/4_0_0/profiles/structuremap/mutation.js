// Schemas
const StructureMapSchema = require('../../schemas/structuremap.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const StructureMapInput = require('../../inputs/structuremap.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createStructureMap,
	updateStructureMap,
	removeStructureMap,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'StructureMap',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a StructureMap record.',
	},
	resource: {
		type: new GraphQLNonNull(StructureMapInput),
		description: 'StructureMap Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a StructureMap record for deletion.',
	},
};

/**
 * @name exports.StructureMapCreateMutation
 * @summary StructureMapCreate mutation.
 */
module.exports.StructureMapCreateMutation = {
	description: 'Create a StructureMap record',
	resolve: scopeInvariant(scopeOptions, createStructureMap),
	type: StructureMapSchema,
	args: WriteArgs,
};

/**
 * @name exports.StructureMapUpdateMutation
 * @summary StructureMapUpdate mutation.
 */
module.exports.StructureMapUpdateMutation = {
	description: 'Update a StructureMap record',
	resolve: scopeInvariant(scopeOptions, updateStructureMap),
	type: StructureMapSchema,
	args: WriteArgs,
};

/**
 * @name exports.StructureMapRemoveMutation
 * @summary StructureMapRemove mutation.
 */
module.exports.StructureMapRemoveMutation = {
	description: 'Remove a StructureMap record',
	resolve: scopeInvariant(scopeOptions, removeStructureMap),
	type: StructureMapSchema,
	args: DeleteArgs,
};
