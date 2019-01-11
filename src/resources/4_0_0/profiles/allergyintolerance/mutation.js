// Schemas
const AllergyIntoleranceSchema = require('../../schemas/allergyintolerance.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const AllergyIntoleranceInput = require('../../inputs/allergyintolerance.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createAllergyIntolerance,
	updateAllergyIntolerance,
	removeAllergyIntolerance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AllergyIntolerance',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a AllergyIntolerance record.',
	},
	resource: {
		type: new GraphQLNonNull(AllergyIntoleranceInput),
		description: 'AllergyIntolerance Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a AllergyIntolerance record for deletion.',
	},
};

/**
 * @name exports.AllergyIntoleranceCreateMutation
 * @summary AllergyIntoleranceCreate mutation.
 */
module.exports.AllergyIntoleranceCreateMutation = {
	description: 'Create a AllergyIntolerance record',
	resolve: scopeInvariant(scopeOptions, createAllergyIntolerance),
	type: AllergyIntoleranceSchema,
	args: WriteArgs,
};

/**
 * @name exports.AllergyIntoleranceUpdateMutation
 * @summary AllergyIntoleranceUpdate mutation.
 */
module.exports.AllergyIntoleranceUpdateMutation = {
	description: 'Update a AllergyIntolerance record',
	resolve: scopeInvariant(scopeOptions, updateAllergyIntolerance),
	type: AllergyIntoleranceSchema,
	args: WriteArgs,
};

/**
 * @name exports.AllergyIntoleranceRemoveMutation
 * @summary AllergyIntoleranceRemove mutation.
 */
module.exports.AllergyIntoleranceRemoveMutation = {
	description: 'Remove a AllergyIntolerance record',
	resolve: scopeInvariant(scopeOptions, removeAllergyIntolerance),
	type: AllergyIntoleranceSchema,
	args: DeleteArgs,
};
