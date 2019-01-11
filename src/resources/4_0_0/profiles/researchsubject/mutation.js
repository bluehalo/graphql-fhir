// Schemas
const ResearchSubjectSchema = require('../../schemas/researchsubject.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ResearchSubjectInput = require('../../inputs/researchsubject.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createResearchSubject,
	updateResearchSubject,
	removeResearchSubject,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchSubject',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ResearchSubject record.',
	},
	resource: {
		type: new GraphQLNonNull(ResearchSubjectInput),
		description: 'ResearchSubject Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ResearchSubject record for deletion.',
	},
};

/**
 * @name exports.ResearchSubjectCreateMutation
 * @summary ResearchSubjectCreate mutation.
 */
module.exports.ResearchSubjectCreateMutation = {
	description: 'Create a ResearchSubject record',
	resolve: scopeInvariant(scopeOptions, createResearchSubject),
	type: ResearchSubjectSchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchSubjectUpdateMutation
 * @summary ResearchSubjectUpdate mutation.
 */
module.exports.ResearchSubjectUpdateMutation = {
	description: 'Update a ResearchSubject record',
	resolve: scopeInvariant(scopeOptions, updateResearchSubject),
	type: ResearchSubjectSchema,
	args: WriteArgs,
};

/**
 * @name exports.ResearchSubjectRemoveMutation
 * @summary ResearchSubjectRemove mutation.
 */
module.exports.ResearchSubjectRemoveMutation = {
	description: 'Remove a ResearchSubject record',
	resolve: scopeInvariant(scopeOptions, removeResearchSubject),
	type: ResearchSubjectSchema,
	args: DeleteArgs,
};
