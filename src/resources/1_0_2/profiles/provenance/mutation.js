// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProvenanceSchema = require('../../schemas/provenance.schema');

// Inputs
const ProvenanceInput = require('../../inputs/provenance.input');

// Resolvers
const {
	provenanceCreateResolver,
	provenanceUpdateResolver,
	provenanceDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Provenance',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Provenance record.'
	},
	resource: {
		type: new GraphQLNonNull(ProvenanceInput),
		description: 'Provenance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, provenanceCreateResolver),
	type: ProvenanceSchema
};

/**
 * @name exports.ProvenanceUpdateMutation
 * @summary ProvenanceUpdate Mutation.
 */
module.exports.ProvenanceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Provenances',
	resolve: scopeInvariant(scopeOptions, provenanceUpdateResolver),
	type: ProvenanceSchema
};

/**
 * @name exports.ProvenanceDeleteMutation
 * @summary ProvenanceDelete Mutation.
 */
module.exports.ProvenanceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Provenance',
	resolve: scopeInvariant(scopeOptions, provenanceDeleteResolver),
	type: ProvenanceSchema
};
