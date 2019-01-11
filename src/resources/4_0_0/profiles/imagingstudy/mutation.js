// Schemas
const ImagingStudySchema = require('../../schemas/imagingstudy.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImagingStudyInput = require('../../inputs/imagingstudy.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImagingStudy,
	updateImagingStudy,
	removeImagingStudy,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImagingStudy',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ImagingStudy record.',
	},
	resource: {
		type: new GraphQLNonNull(ImagingStudyInput),
		description: 'ImagingStudy Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ImagingStudy record for deletion.',
	},
};

/**
 * @name exports.ImagingStudyCreateMutation
 * @summary ImagingStudyCreate mutation.
 */
module.exports.ImagingStudyCreateMutation = {
	description: 'Create a ImagingStudy record',
	resolve: scopeInvariant(scopeOptions, createImagingStudy),
	type: ImagingStudySchema,
	args: WriteArgs,
};

/**
 * @name exports.ImagingStudyUpdateMutation
 * @summary ImagingStudyUpdate mutation.
 */
module.exports.ImagingStudyUpdateMutation = {
	description: 'Update a ImagingStudy record',
	resolve: scopeInvariant(scopeOptions, updateImagingStudy),
	type: ImagingStudySchema,
	args: WriteArgs,
};

/**
 * @name exports.ImagingStudyRemoveMutation
 * @summary ImagingStudyRemove mutation.
 */
module.exports.ImagingStudyRemoveMutation = {
	description: 'Remove a ImagingStudy record',
	resolve: scopeInvariant(scopeOptions, removeImagingStudy),
	type: ImagingStudySchema,
	args: DeleteArgs,
};
