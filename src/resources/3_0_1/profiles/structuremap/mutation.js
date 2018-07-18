// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const StructureMapSchema = require('../../schemas/structuremap.schema');

// Inputs
const StructureMapInput = require('../../inputs/structuremap.input');


const {
	structuremapCreateResolver,
	structuremapUpdateResolver,
	structuremapDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a StructureMap record.'
	},
	resource: {
		type: StructureMapInput,
		description: 'StructureMap Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a StructureMap record for deletion.'
	}
};

/**
 * @name exports.StructureMapCreateMutation
 * @summary StructureMapCreate Mutation.
 */
module.exports.StructureMapCreateMutation = {
	args: WriteArgs,
	description: 'Create a StructureMap',
	resolve: structuremapCreateResolver,
	type: StructureMapSchema
};

/**
 * @name exports.StructureMapUpdateMutation
 * @summary StructureMapUpdate Mutation.
 */
module.exports.StructureMapUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple StructureMaps',
	resolve: structuremapUpdateResolver,
	type: StructureMapSchema
};

/**
 * @name exports.StructureMapDeleteMutation
 * @summary StructureMapDelete Mutation.
 */
module.exports.StructureMapDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single StructureMap',
	resolve: structuremapDeleteResolver,
	type: StructureMapSchema
};
