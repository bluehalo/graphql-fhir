// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SubstanceSchema = require('../../schemas/substance.schema');

// Inputs
const SubstanceInput = require('../../inputs/substance.input');

// Resolvers
const {
	substanceCreateResolver,
	substanceUpdateResolver,
	substanceDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Substance',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Substance record.'
	},
	resource: {
		type: new GraphQLNonNull(SubstanceInput),
		description: 'Substance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Substance record for deletion.'
	}
};

/**
 * @name exports.SubstanceCreateMutation
 * @summary SubstanceCreate Mutation.
 */
module.exports.SubstanceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Substance',
	resolve: scopeInvariant(scopeOptions, substanceCreateResolver),
	type: SubstanceSchema
};

/**
 * @name exports.SubstanceUpdateMutation
 * @summary SubstanceUpdate Mutation.
 */
module.exports.SubstanceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Substances',
	resolve: scopeInvariant(scopeOptions, substanceUpdateResolver),
	type: SubstanceSchema
};

/**
 * @name exports.SubstanceDeleteMutation
 * @summary SubstanceDelete Mutation.
 */
module.exports.SubstanceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Substance',
	resolve: scopeInvariant(scopeOptions, substanceDeleteResolver),
	type: SubstanceSchema
};
