// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ConceptMapSchema = require('../../schemas/conceptmap.schema');

// Inputs
const ConceptMapInput = require('../../inputs/conceptmap.input');


const {
	conceptmapCreateResolver,
	conceptmapUpdateResolver,
	conceptmapDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ConceptMap record.'
	},
	resource: {
		type: ConceptMapInput,
		description: 'ConceptMap Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ConceptMap record for deletion.'
	}
};

/**
 * @name exports.ConceptMapCreateMutation
 * @summary ConceptMapCreate Mutation.
 */
module.exports.ConceptMapCreateMutation = {
	args: WriteArgs,
	description: 'Create a ConceptMap',
	resolve: conceptmapCreateResolver,
	type: ConceptMapSchema
};

/**
 * @name exports.ConceptMapUpdateMutation
 * @summary ConceptMapUpdate Mutation.
 */
module.exports.ConceptMapUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ConceptMaps',
	resolve: conceptmapUpdateResolver,
	type: ConceptMapSchema
};

/**
 * @name exports.ConceptMapDeleteMutation
 * @summary ConceptMapDelete Mutation.
 */
module.exports.ConceptMapDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ConceptMap',
	resolve: conceptmapDeleteResolver,
	type: ConceptMapSchema
};
