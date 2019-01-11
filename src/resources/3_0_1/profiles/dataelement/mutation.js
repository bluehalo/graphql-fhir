// Schemas
const DataElementSchema = require('../../schemas/dataelement.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DataElementInput = require('../../inputs/dataelement.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDataElement,
	updateDataElement,
	removeDataElement,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DataElement',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DataElement record.',
	},
	resource: {
		type: new GraphQLNonNull(DataElementInput),
		description: 'DataElement Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DataElement record for deletion.',
	},
};

/**
 * @name exports.DataElementCreateMutation
 * @summary DataElementCreate mutation.
 */
module.exports.DataElementCreateMutation = {
	description: 'Create a DataElement record',
	resolve: scopeInvariant(scopeOptions, createDataElement),
	type: DataElementSchema,
	args: WriteArgs,
};

/**
 * @name exports.DataElementUpdateMutation
 * @summary DataElementUpdate mutation.
 */
module.exports.DataElementUpdateMutation = {
	description: 'Update a DataElement record',
	resolve: scopeInvariant(scopeOptions, updateDataElement),
	type: DataElementSchema,
	args: WriteArgs,
};

/**
 * @name exports.DataElementRemoveMutation
 * @summary DataElementRemove mutation.
 */
module.exports.DataElementRemoveMutation = {
	description: 'Remove a DataElement record',
	resolve: scopeInvariant(scopeOptions, removeDataElement),
	type: DataElementSchema,
	args: DeleteArgs,
};
