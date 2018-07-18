// Schemas
const ResearchSubjectSchema = require('../../schemas/researchsubject.schema');

// Arguments
const ResearchSubjectArgs = require('../../parameters/researchsubject.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	researchsubjectResolver,
	researchsubjectListResolver,
	researchsubjectInstanceResolver
} = require('./resolver');

/**
 * @name exports.ResearchSubjectQuery
 * @summary ResearchSubject Query.
 */
module.exports.ResearchSubjectQuery = {
	args: Object.assign({}, CommonArgs, ResearchSubjectArgs),
	description: 'Query for a single ResearchSubject',
	resolve: researchsubjectResolver,
	type: ResearchSubjectSchema
};

/**
 * @name exports.ResearchSubjectListQuery
 * @summary ResearchSubjectList Query.
 */
module.exports.ResearchSubjectListQuery = {
	args: Object.assign({}, CommonArgs, ResearchSubjectArgs),
	description: 'Query for multiple ResearchSubjects',
	resolve: researchsubjectListResolver,
	type: new GraphQLList(ResearchSubjectSchema)
};

/**
 * @name exports.ResearchSubjectInstanceQuery
 * @summary ResearchSubjectInstance Query.
 */
module.exports.ResearchSubjectInstanceQuery = {
	description: 'Get information about a single ResearchSubject',
	resolve: researchsubjectInstanceResolver,
	type: ResearchSubjectSchema
};
