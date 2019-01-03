// Schemas
const ResearchStudySchema = require('../../schemas/researchstudy.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ResearchStudyArgs = require('../../parameters/researchstudy.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	researchstudyResolver,
	researchstudyListResolver,
	researchstudyInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ResearchStudy',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ResearchStudyQuery
 * @summary ResearchStudy Query.
 */
module.exports.ResearchStudyQuery = {
	args: Object.assign({}, CommonArgs, ResearchStudyArgs),
	description: 'Query for a single ResearchStudy',
	resolve: scopeInvariant(scopeOptions, researchstudyResolver),
	type: ResearchStudySchema,
};

/**
 * @name exports.ResearchStudyListQuery
 * @summary ResearchStudyList Query.
 */
module.exports.ResearchStudyListQuery = {
	args: Object.assign({}, CommonArgs, ResearchStudyArgs),
	description: 'Query for multiple ResearchStudys',
	resolve: scopeInvariant(scopeOptions, researchstudyListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ResearchStudyInstanceQuery
 * @summary ResearchStudyInstance Query.
 */
module.exports.ResearchStudyInstanceQuery = {
	description: 'Get information about a single ResearchStudy',
	resolve: scopeInvariant(scopeOptions, researchstudyInstanceResolver),
	type: ResearchStudySchema,
};
