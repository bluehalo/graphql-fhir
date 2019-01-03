// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ResearchSubjectSchema = require('../../schemas/researchsubject.schema');

// Inputs
const ResearchSubjectInput = require('../../inputs/researchsubject.input');

// Resolvers
const {
	researchsubjectCreateResolver,
	researchsubjectUpdateResolver,
	researchsubjectDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ResearchSubject',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a ResearchSubject record for deletion.',
	},
};

/**
 * @name exports.ResearchSubjectCreateMutation
 * @summary ResearchSubjectCreate Mutation.
 */
module.exports.ResearchSubjectCreateMutation = {
	args: WriteArgs,
	description: 'Create a ResearchSubject',
	resolve: scopeInvariant(scopeOptions, researchsubjectCreateResolver),
	type: ResearchSubjectSchema,
};

/**
 * @name exports.ResearchSubjectUpdateMutation
 * @summary ResearchSubjectUpdate Mutation.
 */
module.exports.ResearchSubjectUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ResearchSubjects',
	resolve: scopeInvariant(scopeOptions, researchsubjectUpdateResolver),
	type: ResearchSubjectSchema,
};

/**
 * @name exports.ResearchSubjectDeleteMutation
 * @summary ResearchSubjectDelete Mutation.
 */
module.exports.ResearchSubjectDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ResearchSubject',
	resolve: scopeInvariant(scopeOptions, researchsubjectDeleteResolver),
	type: ResearchSubjectSchema,
};
