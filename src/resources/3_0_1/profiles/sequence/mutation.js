// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SequenceSchema = require('../../schemas/sequence.schema');

// Inputs
const SequenceInput = require('../../inputs/sequence.input');

// Resolvers
const {
	sequenceCreateResolver,
	sequenceUpdateResolver,
	sequenceDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Sequence',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Sequence record.',
	},
	resource: {
		type: new GraphQLNonNull(SequenceInput),
		description: 'Sequence Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Sequence record for deletion.',
	},
};

/**
 * @name exports.SequenceCreateMutation
 * @summary SequenceCreate Mutation.
 */
module.exports.SequenceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Sequence',
	resolve: scopeInvariant(scopeOptions, sequenceCreateResolver),
	type: SequenceSchema,
};

/**
 * @name exports.SequenceUpdateMutation
 * @summary SequenceUpdate Mutation.
 */
module.exports.SequenceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Sequences',
	resolve: scopeInvariant(scopeOptions, sequenceUpdateResolver),
	type: SequenceSchema,
};

/**
 * @name exports.SequenceDeleteMutation
 * @summary SequenceDelete Mutation.
 */
module.exports.SequenceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Sequence',
	resolve: scopeInvariant(scopeOptions, sequenceDeleteResolver),
	type: SequenceSchema,
};
