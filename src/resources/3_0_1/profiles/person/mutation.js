// Schemas
const PersonSchema = require('../../schemas/person.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PersonInput = require('../../inputs/person.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createPerson, updatePerson, removePerson } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Person',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Person record.',
	},
	resource: {
		type: new GraphQLNonNull(PersonInput),
		description: 'Person Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Person record for deletion.',
	},
};

/**
 * @name exports.PersonCreateMutation
 * @summary PersonCreate mutation.
 */
module.exports.PersonCreateMutation = {
	description: 'Create a Person record',
	resolve: scopeInvariant(scopeOptions, createPerson),
	type: PersonSchema,
	args: WriteArgs,
};

/**
 * @name exports.PersonUpdateMutation
 * @summary PersonUpdate mutation.
 */
module.exports.PersonUpdateMutation = {
	description: 'Update a Person record',
	resolve: scopeInvariant(scopeOptions, updatePerson),
	type: PersonSchema,
	args: WriteArgs,
};

/**
 * @name exports.PersonRemoveMutation
 * @summary PersonRemove mutation.
 */
module.exports.PersonRemoveMutation = {
	description: 'Remove a Person record',
	resolve: scopeInvariant(scopeOptions, removePerson),
	type: PersonSchema,
	args: DeleteArgs,
};
