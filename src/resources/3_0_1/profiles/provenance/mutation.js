// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProvenanceSchema = require('../../schemas/provenance.schema');

// Inputs
const ProvenanceInput = require('../../inputs/provenance.input');


const {
	provenanceCreateResolver,
	provenanceUpdateResolver,
	provenanceDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Provenance record.'
	},
	resource: {
		type: ProvenanceInput,
		description: 'Provenance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Provenance record for deletion.'
	}
};

/**
 * @name exports.ProvenanceCreateMutation
 * @summary ProvenanceCreate Mutation.
 */
module.exports.ProvenanceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Provenance',
	resolve: provenanceCreateResolver,
	type: ProvenanceSchema
};

/**
 * @name exports.ProvenanceUpdateMutation
 * @summary ProvenanceUpdate Mutation.
 */
module.exports.ProvenanceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Provenances',
	resolve: provenanceUpdateResolver,
	type: ProvenanceSchema
};

/**
 * @name exports.ProvenanceDeleteMutation
 * @summary ProvenanceDelete Mutation.
 */
module.exports.ProvenanceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Provenance',
	resolve: provenanceDeleteResolver,
	type: ProvenanceSchema
};
