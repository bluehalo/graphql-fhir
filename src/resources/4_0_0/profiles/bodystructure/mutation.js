// Schemas
const BodyStructureSchema = require('../../schemas/bodystructure.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const BodyStructureInput = require('../../inputs/bodystructure.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createBodyStructure,
	updateBodyStructure,
	removeBodyStructure,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'BodyStructure',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a BodyStructure record.',
	},
	resource: {
		type: new GraphQLNonNull(BodyStructureInput),
		description: 'BodyStructure Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a BodyStructure record for deletion.',
	},
};

/**
 * @name exports.BodyStructureCreateMutation
 * @summary BodyStructureCreate mutation.
 */
module.exports.BodyStructureCreateMutation = {
	description: 'Create a BodyStructure record',
	resolve: scopeInvariant(scopeOptions, createBodyStructure),
	type: BodyStructureSchema,
	args: WriteArgs,
};

/**
 * @name exports.BodyStructureUpdateMutation
 * @summary BodyStructureUpdate mutation.
 */
module.exports.BodyStructureUpdateMutation = {
	description: 'Update a BodyStructure record',
	resolve: scopeInvariant(scopeOptions, updateBodyStructure),
	type: BodyStructureSchema,
	args: WriteArgs,
};

/**
 * @name exports.BodyStructureRemoveMutation
 * @summary BodyStructureRemove mutation.
 */
module.exports.BodyStructureRemoveMutation = {
	description: 'Remove a BodyStructure record',
	resolve: scopeInvariant(scopeOptions, removeBodyStructure),
	type: BodyStructureSchema,
	args: DeleteArgs,
};
