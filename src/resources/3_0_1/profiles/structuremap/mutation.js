// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const StructureMapSchema = require('../../schemas/structuremap.schema');

// Inputs
const StructureMapInput = require('../../inputs/structuremap.input');

// Resolvers
const {
	structuremapCreateResolver,
	structuremapUpdateResolver,
	structuremapDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'StructureMap',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a StructureMap record for deletion.',
	},
};

/**
 * @name exports.StructureMapCreateMutation
 * @summary StructureMapCreate Mutation.
 */
module.exports.StructureMapCreateMutation = {
	args: WriteArgs,
	description: 'Create a StructureMap',
	resolve: scopeInvariant(scopeOptions, structuremapCreateResolver),
	type: StructureMapSchema,
};

/**
 * @name exports.StructureMapUpdateMutation
 * @summary StructureMapUpdate Mutation.
 */
module.exports.StructureMapUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple StructureMaps',
	resolve: scopeInvariant(scopeOptions, structuremapUpdateResolver),
	type: StructureMapSchema,
};

/**
 * @name exports.StructureMapDeleteMutation
 * @summary StructureMapDelete Mutation.
 */
module.exports.StructureMapDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single StructureMap',
	resolve: scopeInvariant(scopeOptions, structuremapDeleteResolver),
	type: StructureMapSchema,
};
