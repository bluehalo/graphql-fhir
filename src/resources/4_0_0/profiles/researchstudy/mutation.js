// Schemas
const ResearchStudySchema = require('../../schemas/researchstudy.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ResearchStudyInput = require('../../inputs/researchstudy.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createResearchStudy,
	updateResearchStudy,
	removeResearchStudy,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchStudy',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ResearchStudy record.',
	},
	resource: {
		type: new GraphQLNonNull(ResearchStudyInput),
		description: 'ResearchStudy Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ResearchStudy record for deletion.',
	},
};

/**
 * @name exports.ResearchStudyCreateMutation
 * @summary ResearchStudyCreate mutation.
 */
module.exports.ResearchStudyCreateMutation = {
	description: 'Create a ResearchStudy record',
	resolve: scopeInvariant(scopeOptions, createResearchStudy),
	type: ResearchStudySchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchStudyUpdateMutation
 * @summary ResearchStudyUpdate mutation.
 */
module.exports.ResearchStudyUpdateMutation = {
	description: 'Update a ResearchStudy record',
	resolve: scopeInvariant(scopeOptions, updateResearchStudy),
	type: ResearchStudySchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchStudyRemoveMutation
 * @summary ResearchStudyRemove mutation.
 */
module.exports.ResearchStudyRemoveMutation = {
	description: 'Remove a ResearchStudy record',
	resolve: scopeInvariant(scopeOptions, removeResearchStudy),
	type: ResearchStudySchema,
	args: DeleteArgs,
};
