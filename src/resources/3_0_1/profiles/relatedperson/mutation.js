// Schemas
const RelatedPersonSchema = require('../../schemas/relatedperson.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const RelatedPersonInput = require('../../inputs/relatedperson.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createRelatedPerson,
	updateRelatedPerson,
	removeRelatedPerson,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RelatedPerson',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a RelatedPerson record.',
	},
	resource: {
		type: new GraphQLNonNull(RelatedPersonInput),
		description: 'RelatedPerson Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a RelatedPerson record for deletion.',
	},
};

/**
 * @name exports.RelatedPersonCreateMutation
 * @summary RelatedPersonCreate mutation.
 */
module.exports.RelatedPersonCreateMutation = {
	description: 'Create a RelatedPerson record',
	resolve: scopeInvariant(scopeOptions, createRelatedPerson),
	type: RelatedPersonSchema,
	args: WriteArgs,
};

/**
 * @name exports.RelatedPersonUpdateMutation
 * @summary RelatedPersonUpdate mutation.
 */
module.exports.RelatedPersonUpdateMutation = {
	description: 'Update a RelatedPerson record',
	resolve: scopeInvariant(scopeOptions, updateRelatedPerson),
	type: RelatedPersonSchema,
	args: WriteArgs,
};

/**
 * @name exports.RelatedPersonRemoveMutation
 * @summary RelatedPersonRemove mutation.
 */
module.exports.RelatedPersonRemoveMutation = {
	description: 'Remove a RelatedPerson record',
	resolve: scopeInvariant(scopeOptions, removeRelatedPerson),
	type: RelatedPersonSchema,
	args: DeleteArgs,
};
