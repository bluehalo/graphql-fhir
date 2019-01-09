// Schemas
const SpecimenSchema = require('../../schemas/specimen.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SpecimenInput = require('../../inputs/specimen.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSpecimen,
	updateSpecimen,
	removeSpecimen,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Specimen',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Specimen record.',
	},
	resource: {
		type: new GraphQLNonNull(SpecimenInput),
		description: 'Specimen Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Specimen record for deletion.',
	},
};

/**
 * @name exports.SpecimenCreateMutation
 * @summary SpecimenCreate mutation.
 */
module.exports.SpecimenCreateMutation = {
	description: 'Create a Specimen record',
	resolve: scopeInvariant(scopeOptions, createSpecimen),
	type: SpecimenSchema,
	args: WriteArgs,
};

/**
 * @name exports.SpecimenUpdateMutation
 * @summary SpecimenUpdate mutation.
 */
module.exports.SpecimenUpdateMutation = {
	description: 'Update a Specimen record',
	resolve: scopeInvariant(scopeOptions, updateSpecimen),
	type: SpecimenSchema,
	args: WriteArgs,
};

/**
 * @name exports.SpecimenRemoveMutation
 * @summary SpecimenRemove mutation.
 */
module.exports.SpecimenRemoveMutation = {
	description: 'Remove a Specimen record',
	resolve: scopeInvariant(scopeOptions, removeSpecimen),
	type: SpecimenSchema,
	args: DeleteArgs,
};
