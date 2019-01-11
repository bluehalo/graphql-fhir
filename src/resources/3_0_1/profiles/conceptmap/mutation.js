// Schemas
const ConceptMapSchema = require('../../schemas/conceptmap.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ConceptMapInput = require('../../inputs/conceptmap.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createConceptMap,
	updateConceptMap,
	removeConceptMap,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ConceptMap',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a ConceptMap record.',
	},
	resource: {
		type: new GraphQLNonNull(ConceptMapInput),
		description: 'ConceptMap Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ConceptMap record for deletion.',
	},
};

/**
 * @name exports.ConceptMapCreateMutation
 * @summary ConceptMapCreate mutation.
 */
module.exports.ConceptMapCreateMutation = {
	description: 'Create a ConceptMap record',
	resolve: scopeInvariant(scopeOptions, createConceptMap),
	type: ConceptMapSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConceptMapUpdateMutation
 * @summary ConceptMapUpdate mutation.
 */
module.exports.ConceptMapUpdateMutation = {
	description: 'Update a ConceptMap record',
	resolve: scopeInvariant(scopeOptions, updateConceptMap),
	type: ConceptMapSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConceptMapRemoveMutation
 * @summary ConceptMapRemove mutation.
 */
module.exports.ConceptMapRemoveMutation = {
	description: 'Remove a ConceptMap record',
	resolve: scopeInvariant(scopeOptions, removeConceptMap),
	type: ConceptMapSchema,
	args: DeleteArgs,
};
