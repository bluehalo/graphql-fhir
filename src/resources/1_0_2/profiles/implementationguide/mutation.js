// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImplementationGuideSchema = require('../../schemas/implementationguide.schema');

// Inputs
const ImplementationGuideInput = require('../../inputs/implementationguide.input');


const {
	implementationguideCreateResolver,
	implementationguideUpdateResolver,
	implementationguideDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ImplementationGuide record.'
	},
	resource: {
		type: ImplementationGuideInput,
		description: 'ImplementationGuide Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ImplementationGuide record for deletion.'
	}
};

/**
 * @name exports.ImplementationGuideCreateMutation
 * @summary ImplementationGuideCreate Mutation.
 */
module.exports.ImplementationGuideCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImplementationGuide',
	resolve: implementationguideCreateResolver,
	type: ImplementationGuideSchema
};

/**
 * @name exports.ImplementationGuideUpdateMutation
 * @summary ImplementationGuideUpdate Mutation.
 */
module.exports.ImplementationGuideUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImplementationGuides',
	resolve: implementationguideUpdateResolver,
	type: ImplementationGuideSchema
};

/**
 * @name exports.ImplementationGuideDeleteMutation
 * @summary ImplementationGuideDelete Mutation.
 */
module.exports.ImplementationGuideDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImplementationGuide',
	resolve: implementationguideDeleteResolver,
	type: ImplementationGuideSchema
};
