// Schemas
const ClinicalImpressionSchema = require('../../schemas/clinicalimpression.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ClinicalImpressionInput = require('../../inputs/clinicalimpression.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createClinicalImpression,
	updateClinicalImpression,
	removeClinicalImpression,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ClinicalImpression',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ClinicalImpression record.',
	},
	resource: {
		type: new GraphQLNonNull(ClinicalImpressionInput),
		description: 'ClinicalImpression Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ClinicalImpression record for deletion.',
	},
};

/**
 * @name exports.ClinicalImpressionCreateMutation
 * @summary ClinicalImpressionCreate mutation.
 */
module.exports.ClinicalImpressionCreateMutation = {
	description: 'Create a ClinicalImpression record',
	resolve: scopeInvariant(scopeOptions, createClinicalImpression),
	type: ClinicalImpressionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ClinicalImpressionUpdateMutation
 * @summary ClinicalImpressionUpdate mutation.
 */
module.exports.ClinicalImpressionUpdateMutation = {
	description: 'Update a ClinicalImpression record',
	resolve: scopeInvariant(scopeOptions, updateClinicalImpression),
	type: ClinicalImpressionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ClinicalImpressionRemoveMutation
 * @summary ClinicalImpressionRemove mutation.
 */
module.exports.ClinicalImpressionRemoveMutation = {
	description: 'Remove a ClinicalImpression record',
	resolve: scopeInvariant(scopeOptions, removeClinicalImpression),
	type: ClinicalImpressionSchema,
	args: DeleteArgs,
};
