// Schemas
const SubstanceSchema = require('../../schemas/substance.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SubstanceInput = require('../../inputs/substance.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSubstance,
	updateSubstance,
	removeSubstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Substance',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Substance record.',
	},
	resource: {
		type: new GraphQLNonNull(SubstanceInput),
		description: 'Substance Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Substance record for deletion.',
	},
};

/**
 * @name exports.SubstanceCreateMutation
 * @summary SubstanceCreate mutation.
 */
module.exports.SubstanceCreateMutation = {
	description: 'Create a Substance record',
	resolve: scopeInvariant(scopeOptions, createSubstance),
	type: SubstanceSchema,
	args: WriteArgs,
};

/**
 * @name exports.SubstanceUpdateMutation
 * @summary SubstanceUpdate mutation.
 */
module.exports.SubstanceUpdateMutation = {
	description: 'Update a Substance record',
	resolve: scopeInvariant(scopeOptions, updateSubstance),
	type: SubstanceSchema,
	args: WriteArgs,
};

/**
 * @name exports.SubstanceRemoveMutation
 * @summary SubstanceRemove mutation.
 */
module.exports.SubstanceRemoveMutation = {
	description: 'Remove a Substance record',
	resolve: scopeInvariant(scopeOptions, removeSubstance),
	type: SubstanceSchema,
	args: DeleteArgs,
};
