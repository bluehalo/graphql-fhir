// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PersonSchema = require('../../schemas/person.schema');

// Inputs
const PersonInput = require('../../inputs/person.input');

// Resolvers
const {
	personCreateResolver,
	personUpdateResolver,
	personDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Person',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Person record.'
	},
	resource: {
		type: new GraphQLNonNull(PersonInput),
		description: 'Person Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Person record for deletion.'
	}
};

/**
 * @name exports.PersonCreateMutation
 * @summary PersonCreate Mutation.
 */
module.exports.PersonCreateMutation = {
	args: WriteArgs,
	description: 'Create a Person',
	resolve: scopeInvariant(scopeOptions, personCreateResolver),
	type: PersonSchema
};

/**
 * @name exports.PersonUpdateMutation
 * @summary PersonUpdate Mutation.
 */
module.exports.PersonUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Persons',
	resolve: scopeInvariant(scopeOptions, personUpdateResolver),
	type: PersonSchema
};

/**
 * @name exports.PersonDeleteMutation
 * @summary PersonDelete Mutation.
 */
module.exports.PersonDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Person',
	resolve: scopeInvariant(scopeOptions, personDeleteResolver),
	type: PersonSchema
};
