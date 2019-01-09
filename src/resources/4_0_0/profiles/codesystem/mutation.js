// Schemas
const CodeSystemSchema = require('../../schemas/codesystem.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CodeSystemInput = require('../../inputs/codesystem.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCodeSystem,
	updateCodeSystem,
	removeCodeSystem,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CodeSystem',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a CodeSystem record.',
	},
	resource: {
		type: new GraphQLNonNull(CodeSystemInput),
		description: 'CodeSystem Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CodeSystem record for deletion.',
	},
};

/**
 * @name exports.CodeSystemCreateMutation
 * @summary CodeSystemCreate mutation.
 */
module.exports.CodeSystemCreateMutation = {
	description: 'Create a CodeSystem record',
	resolve: scopeInvariant(scopeOptions, createCodeSystem),
	type: CodeSystemSchema,
	args: WriteArgs,
};

/**
 * @name exports.CodeSystemUpdateMutation
 * @summary CodeSystemUpdate mutation.
 */
module.exports.CodeSystemUpdateMutation = {
	description: 'Update a CodeSystem record',
	resolve: scopeInvariant(scopeOptions, updateCodeSystem),
	type: CodeSystemSchema,
	args: WriteArgs,
};

/**
 * @name exports.CodeSystemRemoveMutation
 * @summary CodeSystemRemove mutation.
 */
module.exports.CodeSystemRemoveMutation = {
	description: 'Remove a CodeSystem record',
	resolve: scopeInvariant(scopeOptions, removeCodeSystem),
	type: CodeSystemSchema,
	args: DeleteArgs,
};
