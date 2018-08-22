// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const RelatedPersonSchema = require('../../schemas/relatedperson.schema');

// Inputs
const RelatedPersonInput = require('../../inputs/relatedperson.input');

// Resolvers
const {
	relatedpersonCreateResolver,
	relatedpersonUpdateResolver,
	relatedpersonDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'RelatedPerson',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a RelatedPerson record.'
	},
	resource: {
		type: new GraphQLNonNull(RelatedPersonInput),
		description: 'RelatedPerson Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a RelatedPerson record for deletion.'
	}
};

/**
 * @name exports.RelatedPersonCreateMutation
 * @summary RelatedPersonCreate Mutation.
 */
module.exports.RelatedPersonCreateMutation = {
	args: WriteArgs,
	description: 'Create a RelatedPerson',
	resolve: scopeInvariant(scopeOptions, relatedpersonCreateResolver),
	type: RelatedPersonSchema
};

/**
 * @name exports.RelatedPersonUpdateMutation
 * @summary RelatedPersonUpdate Mutation.
 */
module.exports.RelatedPersonUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple RelatedPersons',
	resolve: scopeInvariant(scopeOptions, relatedpersonUpdateResolver),
	type: RelatedPersonSchema
};

/**
 * @name exports.RelatedPersonDeleteMutation
 * @summary RelatedPersonDelete Mutation.
 */
module.exports.RelatedPersonDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single RelatedPerson',
	resolve: scopeInvariant(scopeOptions, relatedpersonDeleteResolver),
	type: RelatedPersonSchema
};
