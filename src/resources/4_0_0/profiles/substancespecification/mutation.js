// Schemas
const SubstanceSpecificationSchema = require('../../schemas/substancespecification.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SubstanceSpecificationInput = require('../../inputs/substancespecification.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSubstanceSpecification,
	updateSubstanceSpecification,
	removeSubstanceSpecification,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SubstanceSpecification',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a SubstanceSpecification record.',
	},
	resource: {
		type: new GraphQLNonNull(SubstanceSpecificationInput),
		description: 'SubstanceSpecification Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a SubstanceSpecification record for deletion.',
	},
};

/**
 * @name exports.SubstanceSpecificationCreateMutation
 * @summary SubstanceSpecificationCreate mutation.
 */
module.exports.SubstanceSpecificationCreateMutation = {
	description: 'Create a SubstanceSpecification record',
	resolve: scopeInvariant(scopeOptions, createSubstanceSpecification),
	type: SubstanceSpecificationSchema,
	args: WriteArgs,
};

/**
 * @name exports.SubstanceSpecificationUpdateMutation
 * @summary SubstanceSpecificationUpdate mutation.
 */
module.exports.SubstanceSpecificationUpdateMutation = {
	description: 'Update a SubstanceSpecification record',
	resolve: scopeInvariant(scopeOptions, updateSubstanceSpecification),
	type: SubstanceSpecificationSchema,
	args: WriteArgs,
};

/**
 * @name exports.SubstanceSpecificationRemoveMutation
 * @summary SubstanceSpecificationRemove mutation.
 */
module.exports.SubstanceSpecificationRemoveMutation = {
	description: 'Remove a SubstanceSpecification record',
	resolve: scopeInvariant(scopeOptions, removeSubstanceSpecification),
	type: SubstanceSpecificationSchema,
	args: DeleteArgs,
};
