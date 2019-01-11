// Schemas
const ImagingObjectSelectionSchema = require('../../schemas/imagingobjectselection.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImagingObjectSelectionInput = require('../../inputs/imagingobjectselection.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImagingObjectSelection,
	updateImagingObjectSelection,
	removeImagingObjectSelection,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImagingObjectSelection',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ImagingObjectSelection record.',
	},
	resource: {
		type: new GraphQLNonNull(ImagingObjectSelectionInput),
		description: 'ImagingObjectSelection Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ImagingObjectSelection record for deletion.',
	},
};

/**
 * @name exports.ImagingObjectSelectionCreateMutation
 * @summary ImagingObjectSelectionCreate mutation.
 */
module.exports.ImagingObjectSelectionCreateMutation = {
	description: 'Create a ImagingObjectSelection record',
	resolve: scopeInvariant(scopeOptions, createImagingObjectSelection),
	type: ImagingObjectSelectionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImagingObjectSelectionUpdateMutation
 * @summary ImagingObjectSelectionUpdate mutation.
 */
module.exports.ImagingObjectSelectionUpdateMutation = {
	description: 'Update a ImagingObjectSelection record',
	resolve: scopeInvariant(scopeOptions, updateImagingObjectSelection),
	type: ImagingObjectSelectionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImagingObjectSelectionRemoveMutation
 * @summary ImagingObjectSelectionRemove mutation.
 */
module.exports.ImagingObjectSelectionRemoveMutation = {
	description: 'Remove a ImagingObjectSelection record',
	resolve: scopeInvariant(scopeOptions, removeImagingObjectSelection),
	type: ImagingObjectSelectionSchema,
	args: DeleteArgs,
};
