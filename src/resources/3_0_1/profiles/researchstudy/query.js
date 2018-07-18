// Schemas
const ResearchStudySchema = require('../../schemas/researchstudy.schema');

// Arguments
const ResearchStudyArgs = require('../../parameters/researchstudy.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	researchstudyResolver,
	researchstudyListResolver,
	researchstudyInstanceResolver
} = require('./resolver');

/**
 * @name exports.ResearchStudyQuery
 * @summary ResearchStudy Query.
 */
module.exports.ResearchStudyQuery = {
	args: Object.assign({}, CommonArgs, ResearchStudyArgs),
	description: 'Query for a single ResearchStudy',
	resolve: researchstudyResolver,
	type: ResearchStudySchema
};

/**
 * @name exports.ResearchStudyListQuery
 * @summary ResearchStudyList Query.
 */
module.exports.ResearchStudyListQuery = {
	args: Object.assign({}, CommonArgs, ResearchStudyArgs),
	description: 'Query for multiple ResearchStudys',
	resolve: researchstudyListResolver,
	type: new GraphQLList(ResearchStudySchema)
};

/**
 * @name exports.ResearchStudyInstanceQuery
 * @summary ResearchStudyInstance Query.
 */
module.exports.ResearchStudyInstanceQuery = {
	description: 'Get information about a single ResearchStudy',
	resolve: researchstudyInstanceResolver,
	type: ResearchStudySchema
};
