// Schemas
const MeasureSchema = require('../../schemas/measure.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MeasureInput = require('../../inputs/measure.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createMeasure, updateMeasure, removeMeasure } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Measure',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Measure record.',
	},
	resource: {
		type: new GraphQLNonNull(MeasureInput),
		description: 'Measure Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Measure record for deletion.',
	},
};

/**
 * @name exports.MeasureCreateMutation
 * @summary MeasureCreate mutation.
 */
module.exports.MeasureCreateMutation = {
	description: 'Create a Measure record',
	resolve: scopeInvariant(scopeOptions, createMeasure),
	type: MeasureSchema,
	args: WriteArgs,
};

/**
 * @name exports.MeasureUpdateMutation
 * @summary MeasureUpdate mutation.
 */
module.exports.MeasureUpdateMutation = {
	description: 'Update a Measure record',
	resolve: scopeInvariant(scopeOptions, updateMeasure),
	type: MeasureSchema,
	args: WriteArgs,
};

/**
 * @name exports.MeasureRemoveMutation
 * @summary MeasureRemove mutation.
 */
module.exports.MeasureRemoveMutation = {
	description: 'Remove a Measure record',
	resolve: scopeInvariant(scopeOptions, removeMeasure),
	type: MeasureSchema,
	args: DeleteArgs,
};
