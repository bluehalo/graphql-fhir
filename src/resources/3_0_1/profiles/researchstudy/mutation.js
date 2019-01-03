// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ResearchStudySchema = require('../../schemas/researchstudy.schema');

// Inputs
const ResearchStudyInput = require('../../inputs/researchstudy.input');

// Resolvers
const {
	researchstudyCreateResolver,
	researchstudyUpdateResolver,
	researchstudyDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ResearchStudy',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a ResearchStudy record for deletion.',
	},
};

/**
 * @name exports.ResearchStudyCreateMutation
 * @summary ResearchStudyCreate Mutation.
 */
module.exports.ResearchStudyCreateMutation = {
	args: WriteArgs,
	description: 'Create a ResearchStudy',
	resolve: scopeInvariant(scopeOptions, researchstudyCreateResolver),
	type: ResearchStudySchema,
};

/**
 * @name exports.ResearchStudyUpdateMutation
 * @summary ResearchStudyUpdate Mutation.
 */
module.exports.ResearchStudyUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ResearchStudys',
	resolve: scopeInvariant(scopeOptions, researchstudyUpdateResolver),
	type: ResearchStudySchema,
};

/**
 * @name exports.ResearchStudyDeleteMutation
 * @summary ResearchStudyDelete Mutation.
 */
module.exports.ResearchStudyDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ResearchStudy',
	resolve: scopeInvariant(scopeOptions, researchstudyDeleteResolver),
	type: ResearchStudySchema,
};
