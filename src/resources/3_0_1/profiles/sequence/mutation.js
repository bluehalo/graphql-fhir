// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SequenceSchema = require('../../schemas/sequence.schema');

// Inputs
const SequenceInput = require('../../inputs/sequence.input');


const {
	sequenceCreateResolver,
	sequenceUpdateResolver,
	sequenceDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Sequence record.'
	},
	resource: {
		type: SequenceInput,
		description: 'Sequence Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Sequence record for deletion.'
	}
};

/**
 * @name exports.SequenceCreateMutation
 * @summary SequenceCreate Mutation.
 */
module.exports.SequenceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Sequence',
	resolve: sequenceCreateResolver,
	type: SequenceSchema
};

/**
 * @name exports.SequenceUpdateMutation
 * @summary SequenceUpdate Mutation.
 */
module.exports.SequenceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Sequences',
	resolve: sequenceUpdateResolver,
	type: SequenceSchema
};

/**
 * @name exports.SequenceDeleteMutation
 * @summary SequenceDelete Mutation.
 */
module.exports.SequenceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Sequence',
	resolve: sequenceDeleteResolver,
	type: SequenceSchema
};
